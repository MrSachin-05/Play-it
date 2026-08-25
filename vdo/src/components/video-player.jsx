import React from "react";

const BasicVideoPlayer = () => {
  return (
    <div style={{ margin: "20px" }}>
      <h2>Basic HTML5 Video Player</h2>

      <video
        src="https://ik.imagekit.io/ravh0usvw/play-it_pr.mp4"
        // src="https://ik.imagekit.io/ravh0usvw/play-it_pr.mp4?tr=l-subtitles,i-yt/english.srt,l-end"
        width="800"
        height="450"
        controls
        poster="https://ik.imagekit.io/ravh0usvw/play-it_pr.mp4/ik-thumbnail.jpg"
      >
        <track
          kind="subtitles"
          src="https://ik.imagekit.io/ravh0usvw/play-it_pr_English.srt"
          srcLang="en"
          label="English"
          default
        />

        <track kind="subtitles" src="https://ik.imagekit.io/ravh0usvw/play-it_pr_Hindi.srt" srcLang="hi" label="हिंदी" />
      </video>
    </div>
  );
};

export default BasicVideoPlayer;
