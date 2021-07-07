import React from "react";
import data from "../npopos-data.json";
function PoposDetails(props) {
  const { id } = props.match.params; // Location index
  const { images, title, desc, hours, Facts, geo } = data[id];
  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} />
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
