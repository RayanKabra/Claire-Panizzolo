import React, { useState, useEffect } from "react";
import ContactPart from "../assets/images/ServicesAndContact/contact-left-part.webp";
import ServicesDescription from "./ServicesDescription";
import { useLocation } from "react-router-dom";
import Fade from "./Fade";

function ContactImage() {
  const [hovered, setHovered] = useState(false);
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
    <div className="image-container">
      <ServicesDescription />
    </div>
  ) : (
    <div
      className="image-container"
      onMouseEnter={() => setHovered(true)}
      // onMouseLeave={() => setHovered(false)}
    >
      <Fade show={hovered}>
        <ServicesDescription
          styles={{
            paddingRight: "100px",
            marginTop: "50px",
            position: "absolute",
            top: "150px",
            right: "220px",
            width: "450px",
          }}
        />
      </Fade>
      <img src={ContactPart} alt="Contact" className="image" />
    </div>
  );
}

export default ContactImage;
