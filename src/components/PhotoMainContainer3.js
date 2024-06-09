import React, { useState } from "react";

import passion1 from "../assets/images/PhotoThirdPage/passion1.jpg";
import passion2 from "../assets/images/PhotoThirdPage/passion2.jpg";
import passion3 from "../assets/images/PhotoThirdPage/passion3.jpg";
import passion4 from "../assets/images/PhotoThirdPage/passion4.jpg";
import passion5 from "../assets/images/PhotoThirdPage/passion5.jpg";
import passion6 from "../assets/images/PhotoThirdPage/passion6.jpg";
import passion7 from "../assets/images/PhotoThirdPage/passion7.jpg";
import passion8 from "../assets/images/PhotoThirdPage/passion8.jpg";
import passion9 from "../assets/images/PhotoThirdPage/passion9.jpg";
import passion10 from "../assets/images/PhotoThirdPage/passion10.jpg";
import passion11 from "../assets/images/PhotoThirdPage/passion11.jpg";
import passion12 from "../assets/images/PhotoThirdPage/passion12.jpg";
import passion13 from "../assets/images/PhotoThirdPage/passion13.jpg";
import passion14 from "../assets/images/PhotoThirdPage/passion14.jpg";
import passion15 from "../assets/images/PhotoThirdPage/passion15.jpg";
import passion16 from "../assets/images/PhotoThirdPage/passion16.jpg";
import passion17 from "../assets/images/PhotoThirdPage/passion17.jpg";
import passion18 from "../assets/images/PhotoThirdPage/passion18.jpg";
import passion19 from "../assets/images/PhotoThirdPage/passion19.jpg";
import passion20 from "../assets/images/PhotoThirdPage/passion20.jpg";
import passion21 from "../assets/images/PhotoThirdPage/passion21.jpg";
import passion22 from "../assets/images/PhotoThirdPage/passion22.jpg";

const PhotoMainContainer3 = () => {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  const images = [
    passion8,
    passion1,
    passion15,
    passion9,
    passion2,
    passion16,
    passion10,
    passion17,
    passion11,
    passion3,
    passion18,
    passion12,
    passion4,
    passion19,
    passion13,
    passion14,
    passion5,
    passion20,
    passion6,
    passion7,
    passion21,
    passion22,
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
        <h1>À la rencontre des passionné.e.s</h1>
        <p className="title-description">
          De leur savoir-faire, de leur métier, de leur expertise et de leur
          univers.
        </p>
      </div>

      <div className="grid-container">
        <div className="photo-gallery">
          <div className="column">
            <div className="photo">
              <img src={passion8} alt="" onClick={() => showImage(passion8)} />
            </div>
            <div className="photo">
              <img src={passion9} alt="" onClick={() => showImage(passion9)} />
            </div>
            <div className="photo">
              <img
                src={passion10}
                alt=""
                onClick={() => showImage(passion10)}
              />
            </div>
            <div className="photo">
              <img
                src={passion11}
                alt=""
                onClick={() => showImage(passion11)}
              />
            </div>
            <div className="photo">
              <img
                src={passion12}
                alt=""
                onClick={() => showImage(passion12)}
              />
            </div>
            <div className="photo">
              <img
                src={passion13}
                alt=""
                onClick={() => showImage(passion13)}
              />
            </div>
            <div className="photo">
              <img
                src={passion14}
                alt=""
                onClick={() => showImage(passion14)}
              />
            </div>
            <div className="photo">
              <img
                src={passion22}
                alt=""
                onClick={() => showImage(passion22)}
              />
            </div>
          </div>

          <div className="column">
            <div className="photo">
              <img src={passion1} alt="" onClick={() => showImage(passion1)} />
            </div>
            <div className="photo">
              <img src={passion2} alt="" onClick={() => showImage(passion2)} />
            </div>
            <div className="photo">
              <img src={passion3} alt="" onClick={() => showImage(passion3)} />
            </div>
            <div className="photo">
              <img src={passion4} alt="" onClick={() => showImage(passion4)} />
            </div>
            <div className="photo">
              <img src={passion5} alt="" onClick={() => showImage(passion5)} />
            </div>
            <div className="photo">
              <img src={passion6} alt="" onClick={() => showImage(passion6)} />
            </div>
            <div className="photo">
              <img src={passion7} alt="" onClick={() => showImage(passion7)} />
            </div>
          </div>

          <div className="column">
            <div className="photo">
              <img
                src={passion15}
                alt=""
                onClick={() => showImage(passion15)}
              />
            </div>
            <div className="photo">
              <img
                src={passion16}
                alt=""
                onClick={() => showImage(passion16)}
              />
            </div>
            <div className="photo">
              <img
                src={passion17}
                alt=""
                onClick={() => showImage(passion17)}
              />
            </div>
            <div className="photo">
              <img
                src={passion18}
                alt=""
                onClick={() => showImage(passion18)}
              />
            </div>
            <div className="photo">
              <img
                src={passion19}
                alt=""
                onClick={() => showImage(passion19)}
              />
            </div>
            <div className="photo">
              <img
                src={passion20}
                alt=""
                onClick={() => showImage(passion20)}
              />
            </div>
            <div className="photo">
              <img
                src={passion21}
                alt=""
                onClick={() => showImage(passion21)}
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

export default PhotoMainContainer3;
