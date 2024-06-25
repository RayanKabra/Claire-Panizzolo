import React, { useState, useEffect } from "react";
import ServicesPart from "../assets/images/ServicesAndContact/services-right-part.webp";
import Cta from "./Cta";
import Fade from "./Fade";
import { useLocation } from "react-router-dom";

function ServicesImage() {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  const handleMouseEnter = () => {
    setHovered(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location]);

  // const handleMouseLeave = () => {
  //   if (!persisted) {
  //     setHovered(false);
  //   }
  // };

  return isMobile ? (
    <div
      className="image-container"
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <Cta />
    </div>
  ) : (
    <div
      className="image-container"
      onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <img src={ServicesPart} alt="Contact" className="image" />
      <Fade show={hovered}>
        <Cta
          styles={{
            position: "absolute",
            top: "150px",
            left: "320px",
            marginTop: "50px",
            width: "350px",
          }}
        />
      </Fade>
    </div>
  );
}

export default ServicesImage;
