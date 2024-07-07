import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

// Import Desktop backgrounds
import background1 from "../assets/images/Home/home1.webp";
import background2 from "../assets/images//Home/home.jpg";
import background3 from "../assets/images/Home/home3.webp";
import background4 from "../assets/images/Home/home4.webp";
import background5 from "../assets/images/Home/home5.webp";

// Import Mobile backgrounds
import backgroundMobile1 from "../assets/images/Home/homeMobile1.webp";
import backgroundMobile2 from "../assets/images/Home/homeMobile2.webp";
import backgroundMobile3 from "../assets/images/Home/homeMobile3.webp";
import backgroundMobile4 from "../assets/images/Home/homeMobile4.webp";
import backgroundMobile5 from "../assets/images/Home/homeMobile5.webp";
import backgroundMobile6 from "../assets/images/Home/homeMobile6.webp";

const Header = () => {
  const [currentBackground, setCurrentBackground] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 400);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 400);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location]);

  // Desktop backgrounds
  const backgrounds = useMemo(
    () => [background1, background2, background3, background4, background5],
    []
  );

  // Mobile backgrounds
  const backgroundsMobile = useMemo(
    () => [
      backgroundMobile1,
      backgroundMobile2,
      backgroundMobile3,
      backgroundMobile4,
      backgroundMobile5,
      backgroundMobile6,
    ],
    []
  );

  // Preload images
  useEffect(() => {
    const preloadImages = (images) => {
      images.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };

    preloadImages(backgrounds);
    preloadImages(backgroundsMobile);
  }, [backgrounds, backgroundsMobile]);

  useEffect(() => {
    const imagesToUse = isMobile ? backgroundsMobile : backgrounds;

    const interval = setInterval(() => {
      setCurrentBackground((prevBackground) =>
        prevBackground === imagesToUse.length - 1 ? 0 : prevBackground + 1
      );
    }, 4000); // Changez 4000 pour définir la durée entre les changements d'images (en millisecondes)

    return () => clearInterval(interval);
  }, [isMobile, backgrounds, backgroundsMobile]);

  const currentImages = isMobile ? backgroundsMobile : backgrounds;

  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${currentImages[currentBackground]})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        // backgroundAttachment: "fixed",
        // transition: "background-image 1s ease-in-out",
      }}
    >
      <Navbar scrollControlValue={700} />
    </div>
  );
};

export default Header;
