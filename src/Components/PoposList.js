import React from "react";
import PoposPlaces from "./PoposPlace";
import "../CSS Components/PoposList.css";
import data from "../npopos-data.json";
// this components will contain all the public places from the POPOSSpace one by one from one to n
function PoposList() {
  /* image dimensition should be: 750*937*/

  const spaces = data.map(({ title, hours, images, address }, i) => {
    return (
      <PoposPlaces
        id={i}
        key={title}
        PlaceName={title}
        PlaceTime={hours}
        PlaceImage={images[0]}
        PlaceLocation={address}
      />
    );
  });

  return <div className="POPOSList group">{spaces}</div>;
}

export default PoposList;
