import { useEffect, useState, useRef } from "react";
import VaraText from "./AnimatedSvg";
import AnimatedSVG from "./AnimatedSvg";
import { NumberCounter } from "./NumberCounter";

export const SpinnerComponent = ({ scrollPosition }) => {
  const [showAnimation, setShowAnimation] = useState(true);
  useEffect(() => {
    if (scrollPosition > 1200) {
      setShowAnimation(false);
      console.log(showAnimation);
    }
  }, [scrollPosition]);
  const svgRef = useRef(null);

  return (
    <div className="flex relative items-start justify-center h-[150vh] overflow-hidden snap-start">
      <div
        style={{
          ...((scrollPosition > 5) & showAnimation && {
            transform: `scale(${scrollPosition / 2})`,
          }),
        }}
        className={`  absolute text-[#dea193] top-1/3 -translate-y-1/2 duration-300 scale-[55%] xs:scale-[70%]   h-[400px]  sm:w-[1000px] `}
      >
        <AnimatedSVG />
        <div className="flex justify-center max-w-screen opacity-70 ">
          <NumberCounter startAnimation={true} count={2} />
          <NumberCounter startAnimation={true} count={5} />
          <NumberCounter startAnimation={true} count={0} />
          <NumberCounter startAnimation={true} count={2} />
          <NumberCounter startAnimation={true} count={1} />
          <NumberCounter startAnimation={true} count={3} />
        </div>
      </div>
    </div>
  );
};
