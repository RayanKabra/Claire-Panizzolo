import React from "react";
import Navbar from "../../components/Navbar";
import PhotoMainContainer2 from "../../components/PhotoMainContainer2";
import Footer from "../../components/Footer";

const PhotoSecondPage = () => {
  return (
    <div>
      <Navbar scrollControlValue={90} />
      <PhotoMainContainer2 />
      <Footer />
    </div>
  );
};

export default PhotoSecondPage;
