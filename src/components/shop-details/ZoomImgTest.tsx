"use client"
import React from "react";
import shirt from "../../../public/assets/img/shirt/1/17.png";
import ReactImageMagnify from "react-image-magnify";
 
const ZoomImgTest = () => {
  return (
    <div style={{ width: "450px", height: "500px" }}> 
      <ReactImageMagnify
        smallImage={{
          alt: "Wristwatch by Ted Baker London",
          isFluidWidth: true,
          src: shirt.src,
        }}
        largeImage={{
          src: shirt.src,
          width: 1200,
          height: 1800,   
        }}
        lensStyle={{backgroundColor: 'rgba(0,0,0,1)'}}
      />
    </div>
  );
};

export default ZoomImgTest;

