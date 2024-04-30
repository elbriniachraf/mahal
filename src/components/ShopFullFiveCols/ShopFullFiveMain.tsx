import React from "react";
import BreadCrumb from "../SharedComponents/BreadCrumb";
import ShopFullFiveArea from "./ShopFullFiveArea";
import SidebarMain from "../SharedComponents/Sidebars/SidebarMain";
 

const ShopFullFiveMain = () => {
  return (
    <>
      <BreadCrumb title="Shop" />
      <ShopFullFiveArea />
      <SidebarMain/>
     
    </>
  );
};

export default ShopFullFiveMain;
