import React from "react";
import "../CSS Components/Address.css";
import { ExternalLink } from "react-external-link";

function Address({ address, latitude, longitude, openTimes, officielWebsite }) {
  return (
    <div className="location padding-tb">
      <div className="container">
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-md-12">
                <div className="info-box">
                  <i className="fas fa-map-signs circulerIcon"></i>
                  <h3>Address</h3>
                  <p>{address}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="fas fa-map-marked-alt circulerIcon"></i>
                  <h3>Coordinates</h3>
                  <p>
                    <strong>Latitude : </strong>
                    {latitude} <br />
                    <strong>Longitude : </strong>
                    {longitude}
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="fas fa-clock circulerIcon"></i>
                  <h3>Opening hours</h3>
                  <p>
                    {openTimes}
                    <br />
                    <ExternalLink href={officielWebsite}>
                      <span>Visit NORWAY</span>
                    </ExternalLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
