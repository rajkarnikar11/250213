import React from "react";

const ImageViewerWithPinned = ({
  imageUrl,
  text,
  className,
  header,
  pinImage,
}) => {
  return (
    <div
      className={`flex relative items-center  my-auto justify-center ${className} relative  `}
    >
      <div className="relative pl-10 page-bg flex-col items-center flex  h-[468px] w-[calc(100%-16px)] py-3 px-4 m-4 ml-0 mx-auto border-2 border-gray-900 ">
        {header ? (
          <h6 className="book-header px-8  mb-4 font-medium mt-2 text-[40px] max-w-[90%] text-gray-900 bg-opacity-90 border-2 border-[#433e36]  story ">
            {header}
          </h6>
        ) : (
          <div className="h-20" />
        )}
        <div className="relative w-full p-2 bg-gray-100 border border-gray-700 shadow ">
          <div className="absolute  tape-effect  top-0 left-0 p-1  bg-gray-100 border border-gray-700 shadow-sm -rotate-6 !h-[40%] ">
            <img
              className={` object-cover h-full `}
              src={pinImage}
              alt={text}
            />
          </div>
          <img
            className={` object-cover w-full max-h-[200px] `}
            src={imageUrl}
            alt={text}
          />
        </div>
        <p className=" !p-2 mt-4 min-w-[200px] text-center text-2xl paper-effect max-w-[90%] text-gray-900 bg-opacity-90 border-2 border-[#433e36]  backdrop-blur-sm  story ">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ImageViewerWithPinned;
