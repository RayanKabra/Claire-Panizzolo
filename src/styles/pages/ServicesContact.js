import React from "react";
import Navbar from "../../components/Navbar";
import Services from "../../components/Services";
import Footer from "../../components/Footer";

const ServicesContact = () => {
  // const ctaStyles = {
  //   // Ajoutez vos styles CSS spécifiques ici
  //   marginTop: "60px",
  //   color: "black",
  //   // etc.
  // };

  return (
    <div>
      <Navbar scrollControlValue={90} />
      <Services scrollControlValue={90} />
      <Footer />
    </div>
  );
};

export default ServicesContact;
