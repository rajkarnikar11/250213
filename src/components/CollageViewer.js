import React from "react";

export const CollageViewer = ({
  image1,
  image2,
  image3,
  image4,
  text,
  className,
  header,
}) => {
  return (
    <div
      className={`flex relative items-center outline my-auto justify-center ${className}  `}
    >
      <div className="relative pl-10 page-bg flex-col items-center flex  h-[468px] w-[calc(100%-16px)] p-4 m-4 ml-0 mx-auto  outline">
        {header ? (
          <h6 className="book-header px-8 py-1 mb-6 font-medium mt-2 text-[40px] max-w-[90%] text-gray-900 bg-opacity-90 border-2 border-[#433e36]  story ">
            {header}
          </h6>
        ) : (
          <div className="h-20" />
        )}
        <div className="h-[250px] w-full relative">
          <div className="p-1 bg-gray-100 z-40 absolute -top-2 border right-0 -rotate-6 h-[55%] border-gray-700 shadow-lg ">
            <img
              className={` object-contain max-h-full  `}
              src={image1}
              alt={text}
            />
          </div>
          <div className="p-1 bg-gray-100 overflow-hidden z-10 absolute border left-0  h-[70%] top-1/2 -translate-y-1/2 border-gray-700 shadow-lg ">
            <img
              className={` -translate-x-[20%] object-contain max-h-full  `}
              src={image2}
              alt={text}
            />
          </div>
          <div className="absolute right-0 z-20 scale-110 h-full p-1 -translate-x-1/2 bg-gray-100 border border-gray-700 shadow-lg left-[52%] rotate-6 ">
            <img
              className={` object-cover w-full h-full  `}
              src={image3}
              alt={text}
            />
          </div>
          <div className="p-1 bg-gray-100 z-30 absolute border right-0 bottom-0 -rotate-6 h-[65%] border-gray-700 shadow-lg ">
            <img
              className={` object-contain max-h-full  `}
              src={image4}
              alt={text}
            />
          </div>
        </div>
        <p className=" mt-4 min-w-[200px] text-center text-2xl paper-effect max-w-[90%] text-gray-900 bg-opacity-90 border-2 border-[#433e36]  backdrop-blur-sm  story ">
          {text}
        </p>
      </div>
    </div>
  );
};
