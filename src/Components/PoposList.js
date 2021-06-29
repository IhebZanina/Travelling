import React from "react";
import PoposPlaces from "./PoposPlace";
import "../CSS Components/PoposList.css";
// this components will contain all the public places from the POPOSSpace one by one from one to n
function PoposList() {
  /* image dimensition should be: 1024*683*/
  return (
    <div className="POPOSList">
      <PoposPlaces
        PlaceName="Parc national de Lomsdal-Visten"
        PlaceImage="Parc national de Lomsdal-Visten.jpg"
        PlaceDescription="Interesting"
      />
      <PoposPlaces
        PlaceName="Femundsmarka National Park"
        PlaceImage="Femundsmarka National Park.jpg"
        PlaceDescription="interesting"
      />
      <PoposPlaces
        PlaceName="Parc national de Lomsdal-Visten"
        PlaceImage="Parc national de Lomsdal-Visten.jpg"
        PlaceDescription="Interesting"
      />
      <PoposPlaces
        PlaceName="Parc national de Lomsdal-Visten"
        PlaceImage="Parc national de Lomsdal-Visten.jpg"
        PlaceDescription="Interesting"
      />
      <PoposPlaces
        PlaceName="Parc national de Lomsdal-Visten"
        PlaceImage="Parc national de Lomsdal-Visten.jpg"
        PlaceDescription="Interesting"
      />
    </div>
  );
}

export default PoposList;
