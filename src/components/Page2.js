import React from "react";
import ImageViewer from "./ImageViewer";
import Page2image from "../images/page2.jpg";

const Page2 = () => {
  return (
    <div>
      <h6
        className={`text-[#dea193] text-[50px] montserrat flex overflow-hidden h-[100px] `}
      >
        2016
      </h6>
      <div>
        <ImageViewer
          imageUrl={Page2image}
          text="She noticed him through the classroom window...
Her eyes caught his, a brief spark that left her heart racing, a moment frozen in time."
        />
      </div>
    </div>
  );
};

export default Page2;
