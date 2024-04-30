import React from "react";
import BreadCrumb from "../SharedComponents/BreadCrumb";
import ShopFullFourArea from "./ShopFullFourArea";
import SidebarMain from "../SharedComponents/Sidebars/SidebarMain";
 

const ShopFullFourMain = () => {
  return (
    <>
      <BreadCrumb title="Shop" />
      <ShopFullFourArea />
      <SidebarMain/>
    
    </>
  );
};

export default ShopFullFourMain;
