import React, { useState } from "react";
import ServicesPart from "../assets/images/ServicesAndContact/services-right-part.webp";
import Cta from "./Cta";
import Fade from "./Fade";

function ServicesImage() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  // const handleMouseLeave = () => {
  //   if (!persisted) {
  //     setHovered(false);
  //   }
  // };

  return (
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
