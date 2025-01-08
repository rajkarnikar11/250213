import React, { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";

const BackInTime = () => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);
  const typewriterRef = useRef(null); // Ref for Typewriter instance
  const hasTyped = useRef(false); // To track if the typewriter effect has already run

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
    if (isInView && typewriterRef.current && !hasTyped.current) {
      // Start typing once when in view and prevent multiple typings
      typewriterRef.current
        .typeString("Hello")
        .pauseFor(500)
        .typeString(" World!")
        .start();

      // Mark as typed so it won't run again
      hasTyped.current = true;
    }
  }, [isInView]);

  return (
    <div className="relative h-screen outline" ref={elementRef}>
      <Typewriter
        onInit={(typewriter) => {
          typewriterRef.current = typewriter; // Store the instance in the ref
        }}
        options={{
          autoStart: false, // Disable autoStart so we can control it manually
          loop: false,
        }}
      />

      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="w-full minute-hand h-[200px] absolute ">
          <div className=" h-[80px] w-1 absolute bottom-1/2 left-1/2 transform -translate-x-1/2  bg-[gray]" />
        </div>

        <div className="w-full hour-hand h-[200px] absolute ">
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
