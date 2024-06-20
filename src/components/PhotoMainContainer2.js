import React, { useState } from "react";

import food1 from "../assets/images/PhotoSecondPage/food1.jpeg";
import food2 from "../assets/images/PhotoSecondPage/food4.jpeg";
import food3 from "../assets/images/PhotoSecondPage/food7.jpeg";
import food4 from "../assets/images/PhotoSecondPage/food10.jpeg";
import food5 from "../assets/images/PhotoSecondPage/food14.jpeg";
import food6 from "../assets/images/PhotoSecondPage/food17.jpeg";
import food7 from "../assets/images/PhotoSecondPage/food20.jpeg";
import food8 from "../assets/images/PhotoSecondPage/food2.jpeg";
import food9 from "../assets/images/PhotoSecondPage/food5.jpeg";
import food10 from "../assets/images/PhotoSecondPage/food8.jpeg";
import food11 from "../assets/images/PhotoSecondPage/food12.jpeg";
import food12 from "../assets/images/PhotoSecondPage/food15.jpeg";
import food13 from "../assets/images/PhotoSecondPage/food18.jpeg";
import food14 from "../assets/images/PhotoSecondPage/food21.jpeg";
import food15 from "../assets/images/PhotoSecondPage/food3.jpeg";
import food16 from "../assets/images/PhotoSecondPage/food6.jpeg";
import food17 from "../assets/images/PhotoSecondPage/food9.jpeg";
import food18 from "../assets/images/PhotoSecondPage/food13.jpeg";
import food19 from "../assets/images/PhotoSecondPage/food16.jpeg";
import food20 from "../assets/images/PhotoSecondPage/food19.jpeg";
import food21 from "../assets/images/PhotoSecondPage/food22.jpeg";

const PhotoMainContainer = () => {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  const images = [
    food1,
    food8,
    food15,
    food2,
    food9,
    food16,
    food3,
    food10,
    food17,
    food4,
    food11,
    food18,
    food5,
    food12,
    food19,
    food6,
    food13,
    food20,
    food7,
    food14,
    food21,
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
        <h1>À table !</h1>
        <p className="title-description-food">
          Synonyme de partage et de surprises, elle y accueille les petits plats
          et les banquets.
        </p>
      </div>

      <div className="grid-container">
        <div className="photo-gallery">
          <div className="column">
            <div className="photo">
              <img src={food1} alt="" onClick={() => showImage(food1)} />
            </div>
            <div className="photo">
              <img src={food2} alt="" onClick={() => showImage(food2)} />
            </div>
            <div className="photo">
              <img src={food3} alt="" onClick={() => showImage(food3)} />
            </div>
            <div className="photo">
              <img src={food4} alt="" onClick={() => showImage(food4)} />
            </div>
            <div className="photo">
              <img src={food5} alt="" onClick={() => showImage(food5)} />
            </div>
            <div className="photo">
              <img src={food6} alt="" onClick={() => showImage(food6)} />
            </div>
            <div className="photo">
              <img src={food7} alt="" onClick={() => showImage(food7)} />
            </div>
          </div>

          <div className="column">
            <div className="photo">
              <img src={food8} alt="" onClick={() => showImage(food8)} />
            </div>
            <div className="photo">
              <img src={food9} alt="" onClick={() => showImage(food9)} />
            </div>
            <div className="photo">
              <img src={food10} alt="" onClick={() => showImage(food10)} />
            </div>
            <div className="photo">
              <img src={food11} alt="" onClick={() => showImage(food11)} />
            </div>
            <div className="photo">
              <img src={food12} alt="" onClick={() => showImage(food12)} />
            </div>
            <div className="photo">
              <img src={food13} alt="" onClick={() => showImage(food13)} />
            </div>
            <div className="photo">
              <img src={food14} alt="" onClick={() => showImage(food14)} />
            </div>
          </div>

          <div className="column">
            <div className="photo">
              <img src={food15} alt="" onClick={() => showImage(food15)} />
            </div>
            <div className="photo">
              <img src={food16} alt="" onClick={() => showImage(food16)} />
            </div>
            <div className="photo">
              <img src={food17} alt="" onClick={() => showImage(food17)} />
            </div>
            <div className="photo">
              <img src={food18} alt="" onClick={() => showImage(food18)} />
            </div>
            <div className="photo">
              <img src={food19} alt="" onClick={() => showImage(food19)} />
            </div>
            <div className="photo">
              <img src={food20} alt="" onClick={() => showImage(food20)} />
            </div>
            <div className="photo">
              <img src={food21} alt="" onClick={() => showImage(food21)} />
            </div>
          </div>
        </div>
      </div>

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
