import React, { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import AnimatedSvg from "./AnimatedSvg";

const BackInTime = () => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);
  const [fitText, setFitText] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setFitText(true), 300);
      setTimeout(() => setStartAnimation(true), 1000);
    }
  }, [isInView]);

  return (
    <div
      className="relative text-[#dea193]  h-screen flex py-8 justify-evenly items-center flex-col "
      ref={elementRef}
    >
      <div className="relative w-[200px] mx-auto ">
        <div
          className={`w-full ${
            startAnimation ? "minute-hand" : ""
          } h-[200px] absolute `}
        >
          <div className=" h-[80px] w-1 absolute bottom-1/2 left-1/2 transform -translate-x-1/2  bg-[gray]" />
        </div>

        <div
          className={` w-full ${
            startAnimation ? "hour-hand" : ""
          } h-[200px] absolute `}
        >
          <div className=" h-[50px] w-2 absolute bottom-1/2 left-1/2 transform -translate-x-1/2  bg-black" />
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          width="200"
          height="200"
        >
          {/* Clock face */}
          <circle
            cx="100"
            cy="100"
            r="95"
            stroke="black"
            strokeWidth="5"
            fill="white"
          />
          <circle cx="100" cy="100" r="5" fill="black" />

          {/* Clock Numbers */}
          <text x="100" y="30" fontSize="20" textAnchor="middle" dy=".3em">
            12
          </text>
          <text x="170" y="100" fontSize="20" textAnchor="middle" dy=".3em">
            3
          </text>
          <text x="100" y="170" fontSize="20" textAnchor="middle" dy=".3em">
            6
          </text>
          <text x="30" y="100" fontSize="20" textAnchor="middle" dy=".3em">
            9
          </text>
        </svg>
      </div>
    </div>
  );
};

export default BackInTime;
