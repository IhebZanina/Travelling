import React from "react";
import "../CSS Components/PoposPlace.css";

function PoposPlace({ PlaceImage, PlaceName, PlaceTime }) {
  /*const splitterStyle = {
    width: "25rem",
  };*/

  return (
    <div className="responsive">
      <div className="card">
        <figure>
          <img
            src={`${process.env.PUBLIC_URL}images/${PlaceImage}`}
            className="card-img-top"
            alt={PlaceName}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{PlaceName}</h2>
          <p className="card-description">{PlaceTime} </p>
        </div>
      </div>
    </div>
  );
}

export default PoposPlace;
