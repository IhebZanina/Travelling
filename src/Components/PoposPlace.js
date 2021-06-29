import React from "react";
import "../CSS Components/PoposPlace.css";

function PoposPlace({ PlaceImage, PlaceName, PlaceDescription }) {
  /*const splitterStyle = {
    width: "25rem",
  };*/
  return (
    <div className="responsive">
      <div className="card">
        <img
          src={`${process.env.PUBLIC_URL}images/${PlaceImage}`}
          height="auto"
          className="card-img-top"
          alt={PlaceName}
        />
        <div className="card-body">
          <h2 className="card-title">{PlaceName}</h2>
          <p className="card-text">{PlaceDescription} </p>
        </div>
      </div>
    </div>
  );
}

export default PoposPlace;
