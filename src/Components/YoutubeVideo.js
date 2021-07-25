import React from "react";
import "../CSS Components/YoutubeVideo.css";
function YoutubeVideo({ title, youtubeURL }) {
  title += " | YouTube";
  return (
    <div className="highlight-section padding-tb">
      <h2 className="highlights ">highlights</h2>
      <div className="video-responsive">
        <iframe
          src={youtubeURL}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          loading="auto"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default YoutubeVideo;
