import React from "react";
import logo from "../logo.svg";

function PoposPlace({ PlaceImage, PlaceName, PlaceDescription }) {
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}images/${PlaceImage}`}
        width="560"
        height="315"
        alt={PlaceName}
      />
      <h2>{PlaceName}</h2>
      <div>{PlaceDescription} </div>
    </div>
  );
}

export default PoposPlace;
