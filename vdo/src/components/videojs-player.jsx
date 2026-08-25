import React, { useRef } from "react";
import VideoJS from "./videojs";
import "../App.css";

const VideoJSPlayer = () => {
  const playerRef = useRef(null);

  const videoJsOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    autoplay: false,
    muted: true,

    playbackRates: [0.25, 0.5, 1, 1.5, 2],

    sources: [
      {
        src: "https://ik.imagekit.io/ravh0usvw/play-it_pr.mp4/ik-master.m3u8?tr=sr-240_360_480_720_1080",
        type: "application/x-mpegURL",
      },
    ],

    poster:
      "https://ik.imagekit.io/ravh0usvw/play-it_pr.mp4/ik-thumbnail.jpg?tr=w-1200,h-680,so-5",

    tracks: [
      {
        kind: "chapters",
        src: "/chapters.vtt",
        srclang: "en",
        label: "Chapters",
        default: true,
      },
      {
        kind: "captions",
        src: "/english.vtt",
        srclang: "en",
        label: "English",
        default: true,
      },
      {
        kind: "captions",
        src: "/hindi.vtt",
        srclang: "hi",
        label: "Hindi",
        default: true,
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on("waiting", () => {
      console.log("Player is waiting");
    });

    player.on("loadedmetadata", () => {
      console.log("Video metadata loaded");
    });

    player.on("dispose", () => {
      console.log("Player will dispose");
    });
  };

  return (
    <main className="playit-page">
      <div className="playit-layout">

        {/* ================= VIDEO ================= */}
        <section className="playit-video-section">
          <div className="playit-video-card">
            <VideoJS
              options={videoJsOptions}
              onReady={handlePlayerReady}
            />
          </div>

          <div className="playit-video-info">
            <h2>Welcome to Play-it</h2>

            <p>
              Watch your video with subtitles, quality selection,
              playback speed and responsive controls.
            </p>
          </div>
        </section>

        {/* ================= SIDE CONTENT ================= */}
        <aside className="playit-side-section">
          <div className="playit-side-card">
            <h3>Play-it</h3>

            <p>
              Video information and additional content can be
              displayed here.
            </p>
          </div>
        </aside>

      </div>
    </main>
  );
};

export default VideoJSPlayer;