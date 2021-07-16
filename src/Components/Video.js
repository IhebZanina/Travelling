import React from "react";
import "../CSS Components/Video.css";
import video from "./video.mp4";

function Video({ title }) {
  return (
    <div className="videoDiv">
      <video id="myVideo" src={video} type="video/mp4" autoPlay muted loop />
      <div id="videoMessage">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default Video;
