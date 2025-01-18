import React from "react";

const ImageViewer = ({ imageUrl, text, className }) => {
  return (
    <div
      className={`flex relative items-center outline my-auto justify-center ${className}  `}
    >
      <div className="relative h-[400px] flex justify-center p-4 mx-auto bg-gray-200 s w-[full] outline">
        <img className={` object-contain `} src={imageUrl} alt={text} />
        <p className="absolute bottom-4 right-4 p-2 mt-4 text-2xl max-w-[90%] text-gray-900 bg-opacity-90 border-2 border-[#433e36]  backdrop-blur-sm bg-[#fef8cc] story ">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ImageViewer;
