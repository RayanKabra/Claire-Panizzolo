import React from "react";
import ContactImage from "./ContactImage";
import ServicesImage from "./ServicesImage";
// import { useState } from "react";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = (/* { scrollControlValue } */) => {
  /* const [isHidden, setIsHidden] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollControlValue) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location, scrollControlValue]);
 */
  return (
    <div className="services-contact-container">
      <ContactImage />
      <ServicesImage />
    </div>
    /* <div className="services-container">
      <div className="services-container-title">
        <h1>Mes services</h1>
      </div>
      <div className={`before-cta-title ${isHidden ? "hidden" : ""}`}>
        <h2>Vous avez besoin d'un renseignement ? D'un devis ?</h2>
      </div>
    </div> */
  );
};

export default Services;
