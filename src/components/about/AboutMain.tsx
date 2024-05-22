import React from "react";
import BreadCrumb from "../SharedComponents/BreadCrumb";
import AboutHeading from "./AboutHeading";
import AboutArea from "./AboutArea";
import AboutFeatures from "./AboutFeatures";
import SpecialityArea from "./SpecialityArea";
import TestimonialArea from "../homeThree/TestimonialArea";
import SidebarMain from "../SharedComponents/Sidebars/SidebarMain";

const AboutMain = () => {
  return (
    <>
      <BreadCrumb title="About" />
      <AboutHeading />
      <AboutArea />
      <AboutFeatures />
      <SpecialityArea />
      <TestimonialArea />
      <SidebarMain vendorId="-1"/>
    </>
  );
};

export default AboutMain;
