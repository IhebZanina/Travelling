import React from "react";
import "../CSS Components/Images.css";
function images({ images }) {
  return (
    <div className="section over-hide px-4 px-sm-0">
      <div className="container">
        <div className="row  justify-content-center">
          <div className="col-lg-10 col-xl-8 align-self-center padding-tb">
            <div className="section mx-auto text-center slider-height-padding">
              <input
                className="checkbox frst"
                type="radio"
                id="slide-1"
                name="slider"
                defaultChecked
              />
              <label
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}images/${images[1]})`,
                }}
                htmlFor="slide-1"
              ></label>
              <input
                className="checkbox scnd"
                type="radio"
                name="slider"
                id="slider-2"
              />
              <label htmlFor="slider-2"></label>
              <input
                className="checkbox thrd"
                type="radio"
                name="slider"
                id="slider-3"
              />
              <label htmlFor="slider-3"></label>
              <input
                className="checkbox foth"
                type="radio"
                name="slider"
                id="slider-4"
              />
              <label htmlFor="slider-4"></label>
              <ul>
                <li
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}images/${images[1]})`,
                  }}
                >
                  <span>MALE GOOFY FACE</span>
                </li>
                <li>
                  <span>TOY PIG</span>
                </li>
                <li>
                  <span>SHY PORTRAIT</span>
                </li>
                <li>
                  <span>SKATEBOARD FACE</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default images;
