import React from "react";
import Navbar from "../../components/Navbar";
import PhotoMainContainer from "../../components/PhotoMainContainer";
import Footer from "../../components/Footer";

const PhotoFirstPage = () => {
  return (
    <div>
      <Navbar scrollControlValue={90} />
      <PhotoMainContainer />
      <Footer />
    </div>
  );
};

export default PhotoFirstPage;
