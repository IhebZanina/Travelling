import React from "react";
import PoposPlaces from "./PoposPlace";
import "../CSS Components/PoposList.css";
// this components will contain all the public places from the POPOSSpace one by one from one to n
function PoposList() {
  return (
    <div className="centered">
      <div className="POPOSList">
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
      </div>
    </div>
  );
}

export default PoposList;
