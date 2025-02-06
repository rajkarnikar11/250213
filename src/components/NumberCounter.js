export const NumberCounter = ({ startAnimation, count }) => {
  // Generate the years from 2025 to 2016
  const number = Array.from({ length: count + 1 }, (_, i) => i);

  return (
    <div>
      <div className=" text-[#dea193] text-center flex  overflow-hidden  h-[200px]">
        <div
          style={{
            "--count": count,
          }}
          className={` ${startAnimation ? "num-scroll" : ""} h-[100px]  `}
        >
          {number.map((num) => (
            <div
              className="h-[200px] text-shadow montserrat sm:leading-[200px] leading-[100px] text-[100px] sm:text-[200px] text-[#dea193]  "
              key={num}
            >
              {num}
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};
