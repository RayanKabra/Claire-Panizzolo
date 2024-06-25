import React from "react";
import logo from "../assets/logos/logo-orange.png";
import { NavLink, useLocation } from "react-router-dom";
import FullScreenMenu from "./FullScreenMenu";
import { useState, useEffect } from "react";

const Navbar = ({ scrollControlValue }) => {
  const [menuOpen, setMenuOpen] = useState(false); // État pour gérer l'ouverture du menu
  const [isSmall, setIsSmall] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  // To handle the menu opening
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollControlValue) {
        setIsSmall(true);
      } else {
        setIsSmall(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [location, scrollControlValue]);

  return isMobile ? (
    <>
      <div className="navbar-mobile">
        <div className="navbar-mobile-container">
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? null : <span>&#9776;</span>}
          </div>
          <NavLink to="*" className="nav-link">
            <img src={logo} alt="Claire Panizzolo Logo" />
          </NavLink>
        </div>
        {menuOpen && <FullScreenMenu onClose={toggleMenu} />}
      </div>
    </>
  ) : (
    <div className={`navbar ${isSmall ? "small" : ""}`}>
      <nav className={`nav ${isSmall ? "small" : ""}`}>
        <ul>
          <li className="menu menu-left" onClick={toggleMenu}>
            <NavLink to="" className="nav-link">
              {menuOpen ? null : "Photographie"}
            </NavLink>
          </li>

          <li className="logo-nav">
            <NavLink to="*" className="nav-link">
              <img src={logo} alt="Claire Panizzolo Logo" />
            </NavLink>
          </li>

          <li className="menu menu-right">
            <NavLink to="/services" className="nav-link">
              {menuOpen ? null : "Services & Contact"}
            </NavLink>
          </li>
        </ul>
      </nav>
      {menuOpen && <FullScreenMenu onClose={toggleMenu} />}
      {/* Open the menu if menuOpen is equal to true*/}
    </div>
  );
};

export default Navbar;
