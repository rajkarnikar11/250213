import React, { use, useEffect } from "react";

const AnimatedSvg = ({ text, startAnimation, size }) => {
  return (
    <div className={` text-left ${startAnimation ? "animation-svg" : ""} `}>
      {" "}
      <div
        className={` ${size} text-[30px] sm:text-[100px]  text-center whitespace-nowrap cursive-text `}
      >
        {text}
      </div>
    </div>
  );
};

export default AnimatedSvg;
