import React from "react";
import "../CSS Components/Facts.css";
function Facts({ placeFacts }) {
  return (
    <div className="facts-section padding-tb">
      <h2 className="highlights">Facts</h2>
      <div className=" centeringDiv padding-tb">
        <ol>{placeFacts}</ol>
      </div>
    </div>
  );
}

export default Facts;
