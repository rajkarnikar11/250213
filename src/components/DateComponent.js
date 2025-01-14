import React, { useEffect, useRef, useState } from "react";

const YearScroll = ({ startAnimation }) => {
  // Generate the years from 2025 to 2016
  const years = Array.from({ length: 11 }, (_, index) => 2025 - index);

  return (
    <div>
      <div className=" text-[#b76e79] flex overflow-hidden h-[100px]">
        <div>The year was 20</div>
        <div className={` ${startAnimation ? "year-scroll" : ""} -ml-2`}>
          {years.map((year) => (
            <div key={year}>
              {String(year).slice(-2)} {/* Only display the last 2 digits */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DateComponent = () => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);
  const [fitText, setFitText] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

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
    <div className="relative h-screen" ref={elementRef}>
      <h6
        className={`${
          fitText ? "scale-[100%]" : " scale-[1000%] translate-y-[500%] ]"
        } absolute  px-4 montserrat text-[7vw] text-center  sm:text-[5vw] uppercase w-screen  font-bold duration-500 transform -translate-x-1/2 translate-y-1/2 top-5 left-1/2 `}
      >
        <YearScroll startAnimation={startAnimation} />
      </h6>
    </div>
  );
};

export default DateComponent;
