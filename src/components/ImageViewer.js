import React from "react";

const ImageViewer = ({ imageUrl, text, className, header }) => {
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
        <div className="p-2 bg-gray-100 border border-gray-700 shadow ">
          <img
            className={` object-contain max-h-[180px] `}
            src={imageUrl}
            alt={text}
          />
        </div>
        <p className=" p-2 mt-4 text-center text-2xl paper-effect max-w-[90%] text-gray-900 bg-opacity-90 border-2 border-[#433e36]  backdrop-blur-sm  story ">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ImageViewer;
