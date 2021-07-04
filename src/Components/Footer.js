import React from "react";
import "../CSS Components/Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="Designer">
        Designed by&nbsp;
        <strong>
          <a href="https://www.linkedin.com/in/iheb-zanina/" target="_blank">
            Iheb Zanina
          </a>
        </strong>
      </div>
      <div className="contact">
        <a href="https://www.instagram.com/iheb_zanina/" target="_blank">
          <i className="fab fa-instagram fa-lg"></i>
        </a>

        <a href="https://www.facebook.com/ihebzanina/" target="_blank">
          <i className="fab fa-facebook fa-lg"></i>
        </a>
        <a href="https://github.com/IhebZanina" target="_blank">
          <i className="fab fa-github fa-lg"></i>
        </a>
        <a href="https://www.linkedin.com/in/iheb-zanina/" target="_blank">
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
