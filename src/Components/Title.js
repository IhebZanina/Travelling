import React from "react";
import "../Title.css";
function Title({ title, subtitle }) {
  return (
    <div className="Title">
      <h1>{title}</h1>
      <div className="Title-Subtitle">{subtitle}</div>
    </div>
  );
}

export default Title;
