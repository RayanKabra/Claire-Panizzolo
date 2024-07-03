import React, { useState, useEffect, useMemo } from "react";
import Navbar from "./Navbar";
import background1 from "../assets/images/Home/home1.webp";
import background2 from "../assets/images//Home/home.jpg";
import background3 from "../assets/images/Home/home3.webp";
import background4 from "../assets/images/Home/home4.webp";
import background5 from "../assets/images/Home/home5.webp";

const Header = () => {
  const [currentBackground, setCurrentBackground] = useState(0);
  const backgrounds = useMemo(
    () => [background1, background2, background3, background4, background5],
    []
  );

  useEffect(() => {
    backgrounds.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [backgrounds]);

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
      <Navbar scrollControlValue={700} />
    </div>
  );
};

export default Header;
