import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./styles/pages/Home";
import PhotoFirstPage from "./styles/pages/PhotoFirstPage";
import PhotoSecondPage from "./styles/pages/PhotoSecondPage";
import PhotoThirdPage from "./styles/pages/PhotoThirdPage";
import PhotoFourthPage from "./styles/pages/PhotoFourthPage";
import ServicesContact from "./styles/pages/ServicesContact";
import ScrollToTop from "./components/ScrollToTop";
import Legal from "./styles/pages/Legal";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/*To restore scroll to top on routes changes*/}
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/passionated" element={<PhotoThirdPage />} />
        <Route path="/autour-du-globe" element={<PhotoFirstPage />} />
        <Route path="/a-table" element={<PhotoSecondPage />} />
        <Route path="/design" element={<PhotoFourthPage />} />
        <Route path="/services" element={<ServicesContact />} />
        <Route path="/mentions" element={<Legal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
