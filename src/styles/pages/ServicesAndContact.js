import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Services from "../../components/Services";

const ServicesAndContact = () => {
  return (
    <div>
      <Navbar scrollControlValue={30} />
      <Services scrollControlValue={90} />
      <Footer />
    </div>
  );
};

export default ServicesAndContact;
