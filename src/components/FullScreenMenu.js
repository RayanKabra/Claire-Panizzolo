import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const FullScreenMenu = ({ onClose }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location]);

  return isMobile ? (
    <div className="full-screen-menu">
      <div className="photographie-menu-container">
        <div className="buttons">
          <div className="close-btn" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <div className="home-btn">
            <NavLink to="/" className="nav-link">
              <FontAwesomeIcon icon={faHome} />
            </NavLink>
          </div>
        </div>

        <ul className="menu-choices">
          <li className="menu-titles">
            <NavLink to="/passionated" className="nav-link">
              À la rencontre des passionné.e.s
            </NavLink>
          </li>
          <li className="horizontal-line"></li>
          <li className="menu-titles">
            <NavLink to="/autour-du-globe" className="nav-link">
              Autour du globe
            </NavLink>
          </li>
          <li className="horizontal-line"></li>
          <li className="menu-titles">
            <NavLink to="/a-table" className="nav-link">
              À table !
            </NavLink>
          </li>
          <li className="horizontal-line"></li>
          <li className="menu-titles">
            <NavLink to="/design" className="nav-link">
              Architecture - Immobilier - Design
            </NavLink>
          </li>
          <li className="horizontal-line"></li>
          <li className="menu-titles">
            <NavLink to="/services" className="nav-link-services">
              Services & Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <div className="full-screen-menu">
      <div className="photographie-menu-container">
        <div className="buttons">
          <div className="close-btn" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <div className="home-btn">
            <NavLink to="/" className="nav-link">
              <FontAwesomeIcon icon={faHome} />
            </NavLink>
          </div>
        </div>

        <ul className="menu-choices">
          <li className="menu-titles">
            <NavLink to="/passionated" className="nav-link">
              À la rencontre des passionné.e.s
            </NavLink>
          </li>
          <li className="horizontal-line"></li>
          <li className="menu-titles">
            <NavLink to="/autour-du-globe" className="nav-link">
              Autour du globe
            </NavLink>
          </li>
          <li className="horizontal-line"></li>
          <li className="menu-titles">
            <NavLink to="/a-table" className="nav-link">
              À table !
            </NavLink>
          </li>
          <li className="horizontal-line"></li>
          <li className="menu-titles">
            <NavLink to="/design" className="nav-link">
              Architecture - Immobilier - Design
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FullScreenMenu;
