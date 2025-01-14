import React from "react";

const ImageViewer = ({ imageUrl, text, className }) => {
  return (
    <div
      className={`flex h-[calc(100vh_-_110px)] items-center outline my-auto justify-center ${className}  `}
    >
      <div className="relative p-4 mx-auto bg-gray-200 sm:w-1/2 outline">
        <img className={`w-full   `} src={imageUrl} alt={text} />
        <p className="mt-4 text-2xl text-gray-900 story ">{text}</p>
      </div>
    </div>
  );
};

export default ImageViewer;
