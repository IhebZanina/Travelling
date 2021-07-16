import React from "react";
import "../CSS Components/PoposDetails.css";
import data from "../npopos-data.json";
import Overview from "./Overview";
import Images from "./Images";
import Video from "./Video";

function PoposDetails(props) {
  const { id } = props.match.params; // Location index
  const { images, title, desc, hours, Facts, geo } = data[id];
  return (
    <div>
      <Video title={title} />
      <Overview desc={desc} />
      <Images images={images} />
      <div className="video-responsive">
        <iframe
          src="https://www.youtube.com/embed/6KbEEmemeEM?autoplay=0&controls=1&mute=1&playlist=6KbEEmemeEM&loop=1&index=1&end=303&disablekb=1&modestbranding=1&rel=0"
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
