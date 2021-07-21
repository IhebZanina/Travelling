import React from "react";
import "../CSS Components/PoposDetails.css";
import data from "../npopos-data.json";
import Overview from "./Overview";
import Images from "./Images";
import Video from "./Video";
import GoogleMap from "./MapContainer";
import Address from "./Address";

function PoposDetails(props) {
  const { id } = props.match.params; // Location index
  const {
    images,
    title,
    desc,
    hours,
    Facts,
    geo,
    imagesdesc,
    GoogleMapSrc,
    address,
    Resources,
    imageDirectory,
  } = data[id];
  return (
    <div>
      <Video title={title} />
      <Overview desc={desc} />
      <Images
        images={images}
        imagesdesc={imagesdesc}
        imageDirectory={imageDirectory}
      />
      <GoogleMap mapSrc={GoogleMapSrc} latitude={geo.lat} longitude={geo.lon} />
      <Address
        address={address}
        latitude={geo.lat}
        longitude={geo.lon}
        openTimes={hours}
        resources={Resources}
      />
      <div className="video-responsive">
        <iframe
          src="https://www.youtube.com/embed/6KbEEmemeEM?autoplay=0&controls=1&mute=1&playlist=6KbEEmemeEM&loop=1&index=1&end=303&disablekb=1&modestbranding=1&rel=0"
          title="Pieces of Jostedalsbreen | YouTube"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          loading="auto"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default PoposDetails;
