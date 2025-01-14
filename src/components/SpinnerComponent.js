import { useEffect, useState, useRef } from "react";

export const SpinnerComponent = ({ scrollPosition }) => {
  const [showAnimation, setShowAnimation] = useState(true);
  useEffect(() => {
    if (scrollPosition > 1200) {
      setShowAnimation(false);
      console.log(showAnimation);
    }
  }, [scrollPosition]);
  return (
    <div className="flex relative items-start justify-center h-[150vh] overflow-hidden snap-start">
      <div
        style={{
          ...((scrollPosition > 5) & showAnimation && {
            transform: `scale(${scrollPosition / 2})`,
          }),
        }}
        className={` outline absolute top-1/3 -translate-y-1/2 duration-300 scale-[55%] xs:scale-[70%]  max-w-screen h-[400px] w-[400px] `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="400"
          viewBox="0 0 400 400"
          className="-rotate-90 spin"
        >
          <defs>
            <path
              id="circlePath"
              d="M 200,50 A 150,150 0 1,1 200,350 A 150,150 0 1,1 200,50"
            />
          </defs>
          <text
            letterSpacing="-2"
            fontWeight="bold"
            fontSize="44"
            fill="#dea193"
          >
            <textPath href="#circlePath">
              {" "}
              WHEN TWO WILD SOULS UNITE <tspan font-size="80">•</tspan>
              <tspan fontSize="48" letterSpacing="-3" opacity="0.7">
                {" "}
                25 02 13{" "}
              </tspan>
              <tspan font-size="80">•</tspan>
            </textPath>
          </text>
        </svg>
        <p className="logo text-outline absolute top-1/2 left-1/2 -translate-x-[75%] -translate-y-[55%] text-[#dea193] text-[220px]">
          J
        </p>
        <p className="logo text-outline absolute top-1/2 left-1/2 -translate-x-[35%] -translate-y-[50%]  text-[#dea193] text-[220px]">
          R
        </p>
        <p className=" font-semibold top-[20%] absolute right-1/2 text-[#dea193] cursive-text text-4xl text-outline-small">
          Jari
        </p>
        <p className=" bottom-[27.7%] font-semibold absolute left-[55%] text-[#dea193] cursive-text text-4xl text-outline-small">
          Rahul
        </p>
      </div>
    </div>
  );
};
