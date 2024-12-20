import React from "react";

interface VideoPlayerProps {
  src: string;
}

function VideoPlayer({ src }: VideoPlayerProps) {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Video Player</h2>
      <video width="640" height="360" controls controlsList="nodownload">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
