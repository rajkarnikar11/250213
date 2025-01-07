export const SpinnerComponent = () => {
  return (
    <div className=" bg-[#28282B] h-screen w-screen flex justify-center items-center">
      <div className=" relative h-[400px] w-[400px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="400"
          viewBox="0 0 400 400"
          className=" -rotate-90 spin "
        >
          <defs>
            <path
              id="circlePath"
              d="M 200,50 A 150,150 0 1,1 200,350 A 150,150 0 1,1 200,50"
            />
          </defs>
          <text
            letterSpacing="-4"
            fontWeight="bold"
            fontSize="48"
            fill="#B76E79"
          >
            <textPath href="#circlePath">
              {" "}
              WHEN TWO WILD SOULS UNITE <tspan font-size="80">•</tspan>
              <tspan fontSize="48" letterSpacing="-5" opacity="0.7">
                {" "}
                25 02 13{" "}
              </tspan>
              <tspan font-size="80">•</tspan>
            </textPath>
          </text>
        </svg>
        <p className="logo absolute top-1/2 left-1/2 -translate-x-[75%] -translate-y-[55%] text-[#B76E79] text-[220px]">
          J
        </p>
        <p className="logo absolute top-1/2 left-1/2 -translate-x-[35%] -translate-y-[50%]  text-[#B76E79] text-[220px]">
          R
        </p>
      </div>
    </div>
  );
};
