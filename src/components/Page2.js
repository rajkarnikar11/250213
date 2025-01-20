import React from "react";
import ImageViewer from "./ImageViewer";
import Page2image from "../images/page2.jpg";

const Page2 = () => {
  return (
    <div>
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
