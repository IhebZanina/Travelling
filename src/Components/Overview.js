import React from "react";
import "../CSS Components/Overview.css";
function Overview({ desc }) {
  return (
    <div className="container  padding-tb">
      <div className="overview padding-tb">
        <h2>OVERVIEW</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Overview;
