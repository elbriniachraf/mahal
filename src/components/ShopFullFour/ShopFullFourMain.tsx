import React from "react";
import BreadCrumb from "../SharedComponents/BreadCrumb";
import ShopFullFourArea from "./ShopFullFourArea";
import SidebarMain from "../SharedComponents/Sidebars/SidebarMain";
 

const ShopFullFourMain = () => {
  return (
    <>
      <BreadCrumb title="Shop" />
      <ShopFullFourArea />
       <SidebarMain vendorId="-1"/>
    
    </>
  );
};

export default ShopFullFourMain;
