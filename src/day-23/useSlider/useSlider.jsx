import React from "react";
import "./slider.css";
import { useSlider } from "react-use";
import { useState } from "react";

const Slider = () => {
  const [emoji, setEmoji] = useState("😃");
  const ref = React.useRef(null);
  const { value } = useSlider(ref);

  console.log(value);
  let pos = Math.round(value * 94) + "%";

  return (
    <div className="slider">
      <div ref={ref} style={{ position: "relative" }}>
        <div
          className="moving-box"
          style={{ position: "absolute", top: "0%", left: pos }}
          onMouseMove={() => setEmoji("😆")}
          onMouseOut={() => setEmoji("😃")}
        >
          {emoji}
        </div>
      </div>
    </div>
  );
};

export default Slider;
