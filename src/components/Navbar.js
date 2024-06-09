import React from "react";
import logo from "../assets/logos/logo-orange.png";
import { NavLink, useLocation } from "react-router-dom";
import FullScreenMenu from "./FullScreenMenu";
import { useState, useEffect } from "react";

const Navbar = ({ scrollControlValue }) => {
  const [menuOpen, setMenuOpen] = useState(false); // État pour gérer l'ouverture du menu
  const [isSmall, setIsSmall] = useState(false);
  const location = useLocation();

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location, scrollControlValue]);

  return (
    <div className={`navbar ${isSmall ? "small" : ""}`}>
      <nav className={`nav ${isSmall ? "small" : ""}`}>
        <ul>
          <li className="menu" onClick={toggleMenu}>
            <NavLink to="" className="nav-link">
              {menuOpen ? null : "Photographie"}
            </NavLink>
          </li>

          <li className="logo-nav">
            <NavLink to="*" className="nav-link">
              <img src={logo} alt="Claire Panizzolo Logo" />
            </NavLink>
          </li>

          <li className="menu">
            <NavLink to="/services" className="nav-link">
              {menuOpen ? null : "Services & Contact"}
            </NavLink>
          </li>
        </ul>
      </nav>
      {menuOpen && <FullScreenMenu onClose={toggleMenu} />}
      {/* Affiche le menu si menuOpen est vrai*/}
    </div>
  );
};

export default Navbar;
