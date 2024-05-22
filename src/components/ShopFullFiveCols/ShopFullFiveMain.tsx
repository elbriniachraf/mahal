import React from "react";
import BreadCrumb from "../SharedComponents/BreadCrumb";
import ShopFullFiveArea from "./ShopFullFiveArea";
import SidebarMain from "../SharedComponents/Sidebars/SidebarMain";
 

const ShopFullFiveMain = () => {
  return (
    <>
      <BreadCrumb title="Shop" />
      <ShopFullFiveArea />
      <SidebarMain vendorId="-1"/>
     
    </>
  );
};

export default ShopFullFiveMain;
