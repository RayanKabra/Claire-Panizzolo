import React from "react";
import about from "../assets/images/about-2.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-img">
        <img src={about} alt="Claire shooting" />
      </div>
      <div className="about-presentation">
        <div className="about-title">
          <h2>À propos</h2>
        </div>
        <p>
          J'ai toujours été attirée par les métiers d'art et c'est pour cela que
          j'ai poursuivi naturellement mes études dans la Mode et le Luxe. Je
          souhaitais découvrir et comprendre toute la chaîne de conception d’un
          vêtement, d’un accessoire et d’un parfum. Lors de mes dernières années
          de vie, j'ai pu voyager et travailler plusieurs années entre Paris,
          Londres, Milan et Montréal dans le secteur du marketing et des achats.{" "}
        </p>
        <p>
          Je suis dorénavant basée à Rennes en Bretagne et lors de cette
          dernière année, j'ai pris conscience de mon envie d'allier ma passion
          pour la photographie et mon souhait profond de raconter des histoires
          :
        </p>
        <p>
          Mon ambition est de réaliser des reportages photographiques pour des
          entreprises désireuses de transmettre l'énergie de métiers et partager
          des moments de vie par des gestes rares, des produits, des
          savoir-faire et des découvertes qui traduisent le beau et le bon de
          ces échanges. L'inspiration que je glane chez les uns, sera
          communiquée chez les autres.
        </p>
        <p>
          J'aime m’arrêter en chemin pour contempler le paysage, savourer des
          produits fins, profiter du voyage et servir la bonne énergie de
          chacun.{" "}
        </p>
        <p>
          Curieuse, je suis toujours partante pour une nouvelle aventure, mettre
          en lumière des expériences actives qui connectent au monde et à
          soi-même. Quelle sera la prochaine ? J’espère avec vous.{" "}
        </p>
        <p className="Claire">
          Claire<span>.</span>
        </p>

        <div className="social-contact">
          <p className="links">
            <a href="mailto:claire.panizzolo@gmail.com">
              claire.panizzolo<span className="arobase">@</span>gmail.com
            </a>
          </p>
          <span className="vertical-line">|</span>
          <p className="links">
            <a
              href="https://www.instagram.com/clairepanizzolo/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
