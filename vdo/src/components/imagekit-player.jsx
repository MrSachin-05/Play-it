import React from "react";
import { Video, ImageKitProvider } from "@imagekit/react";

const ImageKitBasicPlayer = () => {
  return (
    <ImageKitProvider urlEndpoint="https://ik.imagekit.io/ravh0usvw/play-it_pr.mp4">
      <div className="imagekit-player-page">
        <div className="imagekit-player-container">
          <h2>ImageKit Basic Video Player</h2>

          <Video
            src="https://ik.imagekit.io/ravh0usvw/play-it_pr.mp4"
            controls
            transformation={[
              { quality: 80 },
              { format: "auto" },
            ]}
            poster="https://ik.imagekit.io/ravh0usvw/play-it_pr.mp4/ik-thumbnail.jpg?tr=w-1200,h-675"
          />
        </div>
      </div>
    </ImageKitProvider>
  );
};

export default ImageKitBasicPlayer;