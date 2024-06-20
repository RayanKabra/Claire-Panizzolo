import React, { useState } from "react";

import architecture1 from "../assets/images/PhotoFourthPage/architecture1.webp";
import architecture2 from "../assets/images/PhotoFourthPage/architecture2.webp";
import architecture3 from "../assets/images/PhotoFourthPage/architecture3.webp";
import architecture4 from "../assets/images/PhotoFourthPage/architecture4.webp";
import architecture5 from "../assets/images/PhotoFourthPage/architecture5.webp";
import architecture6 from "../assets/images/PhotoFourthPage/architecture6.webp";
import architecture7 from "../assets/images/PhotoFourthPage/architecture7.webp";
import architecture8 from "../assets/images/PhotoFourthPage/architecture8.webp";
import architecture9 from "../assets/images/PhotoFourthPage/architecture9.webp";
import architecture10 from "../assets/images/PhotoFourthPage/architecture10.webp";
import architecture11 from "../assets/images/PhotoFourthPage/architecture11.webp";
import architecture12 from "../assets/images/PhotoFourthPage/architecture12.webp";
import architecture13 from "../assets/images/PhotoFourthPage/architecture13.webp";
import architecture14 from "../assets/images/PhotoFourthPage/architecture14.webp";
import architecture15 from "../assets/images/PhotoFourthPage/architecture15.webp";

const PhotoMainContainer4 = () => {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  const images = [
    architecture6,
    architecture1,
    architecture11,
    architecture2,
    architecture7,
    architecture12,
    architecture3,
    architecture8,
    architecture13,
    architecture4,
    architecture9,
    architecture14,
    architecture5,
    architecture10,
    architecture15,
    architecture6,
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

  return (
    <div className="main-container">
      <div className="main-container-title">
        <h1>Architecture - Immobilier - Design</h1>
        <p className="title-description">
          Je capture les volumes, les lignes, les matières et j’attache une
          grande importance à la lumière pour mettre en valeur différents
          espaces à l’intérieur et à l’extérieur.
        </p>
      </div>

      <div className="grid-container">
        <div className="photo-gallery">
          <div className="column">
            <div className="photo">
              <img
                src={architecture6}
                alt=""
                onClick={() => showImage(architecture6)}
              />
            </div>
            <div className="photo">
              <img
                src={architecture7}
                alt=""
                onClick={() => showImage(architecture7)}
              />
            </div>
            <div className="photo">
              <img
                src={architecture8}
                alt=""
                onClick={() => showImage(architecture8)}
              />
            </div>
            <div className="photo">
              <img
                src={architecture9}
                alt=""
                onClick={() => showImage(architecture9)}
              />
            </div>
            <div className="photo">
              <img
                src={architecture10}
                alt=""
                onClick={() => showImage(architecture10)}
              />
            </div>
          </div>

          <div className="column">
            <div className="photo">
              <img
                src={architecture1}
                alt=""
                onClick={() => showImage(architecture1)}
              />
            </div>
            <div className="photo">
              <img
                src={architecture2}
                alt=""
                onClick={() => showImage(architecture2)}
              />
            </div>
            <div className="photo">
              <img
                src={architecture3}
                alt=""
                onClick={() => showImage(architecture3)}
              />
            </div>
            <div className="photo">
              <img
                src={architecture4}
                alt=""
                onClick={() => showImage(architecture4)}
              />
            </div>
            <div className="photo">
              <img
                src={architecture5}
                alt=""
                onClick={() => showImage(architecture5)}
              />
            </div>
          </div>

          <div className="column">
            <div className="photo">
              <img
                src={architecture11}
                alt=""
                onClick={() => showImage(architecture11)}
              />
            </div>
            <div className="photo">
              <img
                src={architecture12}
                alt=""
                onClick={() => showImage(architecture12)}
              />
            </div>
            <div className="photo">
              <img
                src={architecture13}
                alt=""
                onClick={() => showImage(architecture13)}
              />
            </div>
            <div className="photo">
              <img
                src={architecture14}
                alt=""
                onClick={() => showImage(architecture14)}
              />
            </div>
            <div className="photo">
              <img
                src={architecture15}
                alt=""
                onClick={() => showImage(architecture15)}
              />
            </div>
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

export default PhotoMainContainer4;
