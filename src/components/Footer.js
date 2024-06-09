import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

/* import { NavLink } from "react-router-dom"; */

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="social-contact">
          <h3>Me contacter :</h3>
          <div className="social-contact-links">
            <a
              href="https://www.instagram.com/clairepanizzolo/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="links" />
            </a>
            <a href="https://www.linkedin.com/in/claire-panizzolo/">
              <FontAwesomeIcon icon={faLinkedin} className="links" />
            </a>
            <a href="mailto:claire.panizzolo@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className="links" />
            </a>
          </div>
        </div>
        <div className="footer-middle-part">
          <h3 className="copyright">
            © Claire Panizzolo - Tous droits réservés
          </h3>
          <p>
            Site web réalisé par{" "}
            <a
              href="https://rk-code.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Rayan Kabra
            </a>
          </p>
        </div>

        <NavLink to="/mentions" className="nav-link">
          <h3 className="legal-informations">Mentions légales</h3>
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
