import React from "react";
import "../CSS Components/PoposDetails.css";
import data from "../npopos-data.json";
import video from "./video.mp4";
function PoposDetails(props) {
  const { id } = props.match.params; // Location index
  const { images, title, desc, hours, Facts, geo } = data[id];
  return (
    <div>
      <div className="videoDiv">
        <video
          id="myVideo"
          src={video}
          type="video/mp4"
          autoPlay="true"
          muted
          loop
        />
        <div id="videoMessage">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="video-responsive">
        <iframe
          src="https://www.youtube.com/embed/6KbEEmemeEM?autoplay=1&controls=1&mute=1&playlist=6KbEEmemeEM&loop=1&index=1&end=303&disablekb=1&modestbranding=1&rel=0"
          title="Pieces of Jostedalsbreen | YouTube"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}images/${images[0]}`}
          alt="{title}"
        />
      </div>

      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
        <p>{hours}</p>
        <p>{Facts["How to travel"]}</p>
        <p>
          {geo.lat} {geo.lon}
        </p>
      </div>
    </div>
  );
}

export default PoposDetails;
