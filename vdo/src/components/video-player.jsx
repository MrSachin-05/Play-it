import React from "react";

const BasicVideoPlayer = () => {
  return (
    <div className="video-player-page">
      <div className="video-player-container">
        <h2>Basic HTML5 Video Player</h2>

        <div className="video-wrapper">
          <video
            src="https://ik.imagekit.io/ravh0usvw/play-it_pr.mp4"
            controls
            playsInline
            preload="metadata"
            poster="https://ik.imagekit.io/ravh0usvw/play-it_pr.mp4/ik-thumbnail.jpg"
          >
            <track
              kind="subtitles"
              src="https://ik.imagekit.io/ravh0usvw/play-it_pr_English.srt"
              srcLang="en"
              label="English"
              default
            />

            <track
              kind="subtitles"
              src="https://ik.imagekit.io/ravh0usvw/play-it_pr_Hindi.srt"
              srcLang="hi"
              label="हिंदी"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default BasicVideoPlayer;