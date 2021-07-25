import React from "react";
import "../CSS Components/PoposDetails.css";
import data from "../npopos-data.json";
import Overview from "./Overview";
import FactsPlace from "./Facts";
import Gallery from "./Gallery";
import GoogleMap from "./MapContainer";
import Address from "./Address";
import Video from "./Video";
import YoutubeVideo from "./YoutubeVideo";
function PoposDetails(props) {
  const { id } = props.match.params; // Location index
  const {
    videoName,
    images,
    title,
    desc,
    hours,
    Facts,
    geo,
    imagesdesc,
    GoogleMapSrc,
    address,
    website,
    imageDirectory,
    youtubeURL,
  } = data[id];
  var facts = [];
  for (const [key, value] of Object.entries(Facts)) {
    facts.push(
      <li className="checkmark" key={key}>
        <b>{key}</b>: {value}
      </li>
    );
  }
  return (
    <div>
      <Video videoName={videoName} title={title} />
      <Overview desc={desc} />
      <FactsPlace placeFacts={facts} />
      <Gallery
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
        officielWebsite={website}
      />
      <YoutubeVideo title={title} youtubeURL={youtubeURL} />
    </div>
  );
}

export default PoposDetails;
