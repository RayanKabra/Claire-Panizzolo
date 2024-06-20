import React, { useState } from "react";
import ContactPart from "../assets/images/ServicesAndContact/contact-left-part.webp";
import ServicesDescription from "./ServicesDescription";
import Fade from "./Fade";

function ContactImage() {
  const [hovered, setHovered] = useState(false);

  return (
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
