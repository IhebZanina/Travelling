import React from "react";
import PoposPlaces from "./PoposPlace";
import "../CSS Components/PoposList.css";
import data from "../npopos-data.json";
// this components will contain all the public places from the POPOSSpace one by one from one to n
function PoposList() {
  /* image dimensition should be: 750*937*/

  const spaces = data.map(({ title, hours, images }) => {
    return (
      <PoposPlaces
        key={title}
        PlaceName={title}
        PlaceTime={hours}
        PlaceImage={images[0]}
      />
    );
  });

  return <div className="POPOSList">{spaces}</div>;
}

export default PoposList;
