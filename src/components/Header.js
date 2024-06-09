import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import background1 from "../assets/images/home.jpg";
import background2 from "../assets/images/Home/home1.jpg";
import background3 from "../assets/images/Home/home3.jpg";
import background4 from "../assets/images/Home/home4.jpg";

const Header = () => {
  const [currentBackground, setCurrentBackground] = useState(0);
  const backgrounds = [background1, background2, background3, background4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prevBackground) =>
        prevBackground === backgrounds.length - 1 ? 0 : prevBackground + 1
      );
    }, 4000); // Changez 5000 pour définir la durée entre les changements d'images (en millisecondes)

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${backgrounds[currentBackground]})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <Navbar scrollControlValue={800} />
    </div>
  );
};

export default Header;
