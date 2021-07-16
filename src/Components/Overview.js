import React from "react";
import "../CSS Components/Overview.css";
function Overview({ desc }) {
  return (
    <div className="container">
      <div className="overview padding-tb">
        <span>
          <h2>Overview</h2>
        </span>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Overview;
