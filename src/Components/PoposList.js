import React from "react";
import PoposPlaces from "./PoposPlace";
import "../CSS Components/PoposList.css";
// this components will contain all the public places from the POPOSSpace one by one from one to n
function PoposList() {
  /* image dimensition should be: 750*937*/
  return (
    <div className="POPOSList">
      <PoposPlaces
        PlaceName="Jostedalsbreen National Park"
        PlaceImage="Jostedalsbreen National Park.png"
        PlaceDescription="Interesting"
      />
      <PoposPlaces
        PlaceName="Dovrefjell-Sunndalsfjella National Park"
        PlaceImage="Dovrefjell-Sunndalsfjella National Park.png"
        PlaceDescription="Interesting"
      />
      <PoposPlaces
        PlaceName="Lomsdal-Visten National Park"
        PlaceImage="Lomsdal-Visten National Park.png"
        PlaceDescription="Interesting"
      />
      <PoposPlaces
        PlaceName="Femundsmarka National Park"
        PlaceImage="Femundsmarka National Park.png"
        PlaceDescription="interesting"
      />

      <PoposPlaces
        PlaceName="Gutulia National Park"
        PlaceImage="Gutulia National Park.png"
        PlaceDescription="Interesting"
      />
      <PoposPlaces
        PlaceName="Rondane National Park"
        PlaceImage="Rondane National Park.png"
        PlaceDescription="Interesting"
      />
    </div>
  );
}

export default PoposList;
