import React from "react";
import "../CSS Components/Title.css";
import { NavLink } from "react-router-dom";

function Title({ title, subtitle }) {
  return (
    <div className="Title">
      <header>
        <h1 className="Light Norway">{title}</h1>
        <div className="Title-Subtitle">{subtitle}</div>
        <div className="navigation">
          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            exact
            to="/"
          >
            List
          </NavLink>
          &nbsp;&nbsp;&nbsp;
          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            to="/about"
          >
            About
          </NavLink>
        </div>
      </header>
    </div>
  );
}

export default Title;
