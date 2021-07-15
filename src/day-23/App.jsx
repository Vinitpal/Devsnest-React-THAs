// import "./day23.scss";
import "./day23.css";
import React from "react";

import MouseMove from "./useEventListener/MouseMove";
import Slider from "./useSlider/useSlider";
import Carousal from "./carousal/Carousal";
import Footer from "../footer/Footer";
import Navbar from "./darkMode/Navbar";

const Day23 = () => {
  return (
    <div className="day23">
      <Navbar />
      <MouseMove />
      <Slider />
      <Carousal />
      <Footer />
    </div>
  );
};

export default Day23;
