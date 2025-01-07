export const SpinnerComponent = () => {
  return (
    <div className=" bg-[#28282B] h-screen w-screen flex justify-center items-center">
      <div className=" outline h-[400px] w-[400px]">
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
            fontSize="55"
            fill="#B76E79"
          >
            <textPath href="#circlePath">
              WHEN TWO WILD SOULS UNITE{" "}
              <tspan fontSize="53" letterSpacing="-5" opacity="0.7">
                25 02 13
              </tspan>
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};
