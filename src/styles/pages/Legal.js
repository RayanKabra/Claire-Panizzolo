import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Mentions from "../../components/Mentions";

const Legal = () => {
  return (
    <div>
      <Navbar scrollControlValue={90} />
      <Mentions />
      <Footer />
    </div>
  );
};

export default Legal;
