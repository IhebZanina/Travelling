import React, { useEffect } from "react";
import "../CSS Components/Images.css";

function Images({ images, imagesdesc, imageDirectory }) {
  /*slider automatique move*/

  var counter = 2;
  useEffect(() => {
    const interval = setInterval(function () {
      document.getElementById("slider-" + counter).checked = true;
      counter++;
      if (counter > 4) {
        counter = 1;
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  /*end of slider auto*/
  return (
    <div className="ImagesSection  padding-tb">
      <h2 className="highlights">Highlights</h2>
      <div className="section over-hide px-4 px-sm-0">
        <div className="container">
          <div className="row  justify-content-center">
            <div className="col-lg-10 col-xl-8 align-self-center padding-tb">
              <div className="section mx-auto text-center slider-height-padding">
                <input
                  className="checkbox frst"
                  type="radio"
                  id="slider-1"
                  name="slider"
                  defaultChecked
                />
                <label
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}Images/${imageDirectory}/${images[1]})`,
                  }}
                  htmlFor="slider-1"
                ></label>
                <input
                  className="checkbox scnd"
                  type="radio"
                  name="slider"
                  id="slider-2"
                />
                <label
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}Images/${imageDirectory}/${images[2]})`,
                  }}
                  htmlFor="slider-2"
                ></label>
                <input
                  className="checkbox thrd"
                  type="radio"
                  name="slider"
                  id="slider-3"
                />
                <label
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}Images/${imageDirectory}/${images[3]})`,
                  }}
                  htmlFor="slider-3"
                ></label>
                <input
                  className="checkbox foth"
                  type="radio"
                  name="slider"
                  id="slider-4"
                />
                <label
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}Images/${imageDirectory}/${images[4]})`,
                  }}
                  htmlFor="slider-4"
                ></label>
                <ul>
                  <li
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}Images/${imageDirectory}/${images[1]})`,
                    }}
                  >
                    <span>{imagesdesc[0]}</span>
                  </li>
                  <li
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}Images/${imageDirectory}/${images[2]})`,
                    }}
                  >
                    <span>{imagesdesc[1]}</span>
                  </li>
                  <li
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}Images/${imageDirectory}/${images[3]})`,
                    }}
                  >
                    <span>{imagesdesc[2]}</span>
                  </li>
                  <li
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}Images/${imageDirectory}/${images[4]})`,
                    }}
                  >
                    <span>{imagesdesc[3]}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Images;
