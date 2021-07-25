import React from "react";

function MapContainer({ mapSrc }) {
  return (
    <div style={{ backgroundColor: "#a0b3a8d5" }} className="padding-tb">
      <h2 className="highlights ">Location</h2>
      <div className="padding-tb">
        <iframe
          title="GoogleMap"
          style={{ border: "0", width: "100%", height: "350px" }}
          src={mapSrc}
          frameBorder="0"
          loading="auto"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default MapContainer;
