import React from "react";

const ServicesDescription = ({ styles }) => {
  return (
    <div className="services-description-container" style={styles}>
      <div className="services-description-title">
        <h2>Mes</h2>
        <h2>Services</h2>
      </div>
      <div className="services-description-presentation">
        <p>
          Photographe professionnelle basée à Rennes, je me déplace en Bretagne,
          à Paris, en France et dans le reste du monde. Je vous accompagne dans
          la réalisation de contenus visuels pour vos projets.
        </p>
      </div>
      <div className="reportage-photos-title padding-title">
        <h2>Reportages photos</h2>
      </div>
      <p>
        Raconter en image les évènements et coulisses de votre entreprise, vos
        savoir-faire et votre ADN de manière authentique.
      </p>
      <div className="photo-produits-title padding-title">
        <h2>Photographies de produits</h2>
      </div>
      <p>
        Valoriser vos produits avec une mise en scène ou en version packshot
        dans divers secteurs.
      </p>
    </div>
  );
};

export default ServicesDescription;
