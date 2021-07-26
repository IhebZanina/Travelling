import React from "react";
import "../CSS Components/Video.css";

function Video({ title, videoName }) {
  return (
    <div className="videoDiv">
      <video id="myVideo" autoPlay muted loop>
        <source
          src={`${process.env.PUBLIC_URL}/Videos/${videoName}`}
          type="video/mp4"
        />
      </video>

      <div id="videoMessage">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default Video;
