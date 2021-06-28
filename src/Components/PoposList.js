import React from "react";
import PoposPlaces from "./PoposPlace";
// this components will contain all the public places from the POPOSSpace one by one from one to n
function PoposList() {
  return (
    <div>
      <PoposPlaces
        PlaceName="Parc national de Lomsdal-Visten"
        PlaceImage="Parc national de Lomsdal-Visten.jpg"
        PlaceDescription="interesting"
      />

      <PoposPlaces
        PlaceName="Femundsmarka National Park"
        PlaceImage="Femundsmarka National Park.jpg"
        PlaceDescription="interesting"
      />
      <PoposPlaces />
    </div>
  );
}

export default PoposList;
