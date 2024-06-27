import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import travel1 from "../assets/images/PhotoFirstPage/travel1.webp";
import travel2 from "../assets/images/PhotoFirstPage/travel4.jpeg";
import travel3 from "../assets/images/PhotoFirstPage/travel7.jpeg";
import travel4 from "../assets/images/PhotoFirstPage/travel10.jpeg";
import travel5 from "../assets/images/PhotoFirstPage/travel13.jpeg";
import travel6 from "../assets/images/PhotoFirstPage/travel16.jpeg";
import travel7 from "../assets/images/PhotoFirstPage/travel19.jpeg";
import travel8 from "../assets/images/PhotoFirstPage/travel3.jpeg";
import travel9 from "../assets/images/PhotoFirstPage/travel6.jpeg";
import travel10 from "../assets/images/PhotoFirstPage/travel9.jpeg";
import travel11 from "../assets/images/PhotoFirstPage/travel12.jpeg";
import travel12 from "../assets/images/PhotoFirstPage/travel15.jpeg";
import travel13 from "../assets/images/PhotoFirstPage/travel18.jpeg";
// import travel14 from "../assets/images/PhotoFirstPage/travel21.jpeg";
import travel15 from "../assets/images/PhotoFirstPage/travel2.jpeg";
import travel16 from "../assets/images/PhotoFirstPage/travel5.jpeg";
import travel17 from "../assets/images/PhotoFirstPage/travel8.jpeg";
import travel18 from "../assets/images/PhotoFirstPage/travel11.jpeg";
import travel19 from "../assets/images/PhotoFirstPage/travel14.jpeg";
import travel20 from "../assets/images/PhotoFirstPage/travel17.jpeg";
import travel21 from "../assets/images/PhotoFirstPage/travel21.jpeg";

const PhotoMainContainer = () => {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
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

  const images = [
    travel1,
    travel15,
    travel8,
    travel2,
    travel16,
    travel9,
    travel3,
    travel17,
    travel10,
    travel4,
    travel18,
    travel11,
    travel5,
    travel19,
    travel12,
    travel6,
    travel20,
    travel13,
    travel7,
    travel21,
  ];

  // Fonction pour afficher une image spécifique dans la lightbox
  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  // Fonction pour masquer la lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  //show next image in lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  return isMobile ? (
    <div className="main-container">
      <div className="main-container-title">
        <h1>Autour du globe</h1>
        <p className="title-description">
          Je documente le voyage, les découvertes et capture l’atmosphère de
          lieux singuliers, ancrés dans la culture d’un pays, d’une région ou
          d’une ville.
        </p>
      </div>

      <div className="grid-container">
        <div className="photo-gallery">
          <div className="column">
            <div className="photo">
              <img src={travel1} alt="" onClick={() => showImage(travel1)} />
            </div>
            <div className="photo">
              <img src={travel15} alt="" onClick={() => showImage(travel15)} />
            </div>
            <div className="photo">
              <img src={travel8} alt="" onClick={() => showImage(travel8)} />
            </div>
            <div className="photo">
              <img src={travel2} alt="" onClick={() => showImage(travel2)} />
            </div>
            <div className="photo">
              <img src={travel16} alt="" onClick={() => showImage(travel16)} />
            </div>
            <div className="photo">
              <img src={travel9} alt="" onClick={() => showImage(travel9)} />
            </div>
            <div className="photo">
              <img src={travel3} alt="" onClick={() => showImage(travel3)} />
            </div>
          </div>

          <div className="column">
            <div className="photo">
              <img src={travel17} alt="" onClick={() => showImage(travel17)} />
            </div>
            <div className="photo">
              <img src={travel10} alt="" onClick={() => showImage(travel10)} />
            </div>
            <div className="photo">
              <img src={travel4} alt="" onClick={() => showImage(travel4)} />
            </div>
            <div className="photo">
              <img src={travel18} alt="" onClick={() => showImage(travel18)} />
            </div>
            <div className="photo">
              <img src={travel11} alt="" onClick={() => showImage(travel11)} />
            </div>
            <div className="photo">
              <img src={travel5} alt="" onClick={() => showImage(travel5)} />
            </div>
            <div className="photo">
              <img src={travel19} alt="" onClick={() => showImage(travel19)} />
            </div>
          </div>

          <div className="column">
            <div className="photo">
              <img src={travel12} alt="" onClick={() => showImage(travel12)} />
            </div>
            <div className="photo">
              <img src={travel6} alt="" onClick={() => showImage(travel6)} />
            </div>
            <div className="photo">
              <img src={travel20} alt="" onClick={() => showImage(travel20)} />
            </div>
            <div className="photo">
              <img src={travel13} alt="" onClick={() => showImage(travel13)} />
            </div>
            <div className="photo">
              <img src={travel7} alt="" onClick={() => showImage(travel7)} />
            </div>
            <div className="photo">
              <img src={travel21} alt="" onClick={() => showImage(travel21)} />
            </div>
            {/* <div className="photo">
              <img src={travel14} alt="" onClick={() => showImage(travel14)} />
            </div> */}
          </div>
        </div>
      </div>

      {/* Affichez la lightbox si elle est ouverte */}
      {lightboxDisplay && (
        <div className="lightbox" onClick={hideLightBox}>
          <button className="lightbox_close"></button>
          <button className="lightbox_next" onClick={showNext}></button>
          <button className="lightbox_prev" onClick={showPrev}></button>
          <div className="lightbox_container">
            <img className="photo" src={imageToShow} alt="Lightbox" />
          </div>
        </div>
      )}
    </div>
  ) : (
    <div className="main-container">
      <div className="main-container-title">
        <h1>Autour du globe</h1>
        <p className="title-description">
          Je documente le voyage, les découvertes et capture l’atmosphère de
          lieux singuliers, ancrés dans la culture d’un pays, d’une région ou
          d’une ville.
        </p>
      </div>

      <div className="grid-container">
        <div className="photo-gallery">
          <div className="column">
            <div className="photo">
              <img src={travel1} alt="" onClick={() => showImage(travel1)} />
            </div>
            <div className="photo">
              <img src={travel2} alt="" onClick={() => showImage(travel2)} />
            </div>
            <div className="photo">
              <img src={travel3} alt="" onClick={() => showImage(travel3)} />
            </div>
            <div className="photo">
              <img src={travel4} alt="" onClick={() => showImage(travel4)} />
            </div>
            <div className="photo">
              <img src={travel5} alt="" onClick={() => showImage(travel5)} />
            </div>
            <div className="photo">
              <img src={travel6} alt="" onClick={() => showImage(travel6)} />
            </div>
            <div className="photo">
              <img src={travel7} alt="" onClick={() => showImage(travel7)} />
            </div>
          </div>

          <div className="column">
            <div className="photo">
              <img src={travel15} alt="" onClick={() => showImage(travel15)} />
            </div>
            <div className="photo">
              <img src={travel16} alt="" onClick={() => showImage(travel16)} />
            </div>
            <div className="photo">
              <img src={travel17} alt="" onClick={() => showImage(travel17)} />
            </div>
            <div className="photo">
              <img src={travel18} alt="" onClick={() => showImage(travel18)} />
            </div>
            <div className="photo">
              <img src={travel19} alt="" onClick={() => showImage(travel19)} />
            </div>
            <div className="photo">
              <img src={travel20} alt="" onClick={() => showImage(travel20)} />
            </div>
            <div className="photo">
              <img src={travel21} alt="" onClick={() => showImage(travel21)} />
            </div>
          </div>

          <div className="column">
            <div className="photo">
              <img src={travel8} alt="" onClick={() => showImage(travel8)} />
            </div>
            <div className="photo">
              <img src={travel9} alt="" onClick={() => showImage(travel9)} />
            </div>
            <div className="photo">
              <img src={travel10} alt="" onClick={() => showImage(travel10)} />
            </div>
            <div className="photo">
              <img src={travel11} alt="" onClick={() => showImage(travel11)} />
            </div>
            <div className="photo">
              <img src={travel12} alt="" onClick={() => showImage(travel12)} />
            </div>
            <div className="photo">
              <img src={travel13} alt="" onClick={() => showImage(travel13)} />
            </div>
            {/* <div className="photo">
              <img src={travel14} alt="" onClick={() => showImage(travel14)} />
            </div> */}
          </div>
        </div>
      </div>

      {/* Affichez la lightbox si elle est ouverte */}
      {lightboxDisplay && (
        <div className="lightbox" onClick={hideLightBox}>
          <button className="lightbox_close"></button>
          <button className="lightbox_next" onClick={showNext}></button>
          <button className="lightbox_prev" onClick={showPrev}></button>
          <div className="lightbox_container">
            <img className="photo" src={imageToShow} alt="Lightbox" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoMainContainer;
