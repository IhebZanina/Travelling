import React from "react";
import "../CSS Components/PoposPlace.css";
import { Link } from "react-router-dom";

function PoposPlace({
  PlaceSmallDesc,
  PlaceImage,
  PlaceName,
  PlaceTime,
  PlaceLocation,
  id,
}) {
  /*const splitterStyle = {
    width: "25rem",
  };*/

  return (
    <div id="group" className="responsive">
      <div className="card">
        <Link to={`/details/${id}`}>
          <figure className="effect-zoe effect-ming">
            <img
              src={`${process.env.PUBLIC_URL}images/${PlaceImage}`}
              className="card-img-top"
              alt={PlaceName}
            />
            <figcaption>
              <h2>
                Learn <span>more</span>
              </h2>
              <p className="icon-links">
                <a href="#">
                  <span className="icon-eye">
                    <i class="far fa-eye"></i>
                  </span>
                </a>
              </p>
              <p className="description">{PlaceSmallDesc}</p>
            </figcaption>
          </figure>
        </Link>

        <div className="card-body">
          <h2 className="card-title">{PlaceName}</h2>
          <p className="card-description">
            <i className="fas fa-location-arrow"></i>&nbsp;&nbsp;
            {PlaceLocation}
            <br />
            <i className="fas fa-clock"></i>&nbsp;&nbsp;
            {PlaceTime}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PoposPlace;
