import React from "react";
import "../CSS Components/PoposPlace.css";

function PoposPlace({ PlaceImage, PlaceName, PlaceDescription }) {
  const splitterStyle = {
    width: "34rem",
  };
  return (
    <div className="card" style={splitterStyle}>
      <img
        src={`${process.env.PUBLIC_URL}images/${PlaceImage}`}
        height="315"
        className="card-img-top"
        alt={PlaceName}
      />
      <div className="card-body">
        <h2 className="card-title">{PlaceName}</h2>
        <p className="card-text">{PlaceDescription} </p>
      </div>
    </div>
  );
}

export default PoposPlace;
