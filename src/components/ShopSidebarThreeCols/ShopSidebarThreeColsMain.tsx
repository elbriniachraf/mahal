import React from "react";
import BreadCrumb from "../SharedComponents/BreadCrumb";
import ShopThreeMainArea from "./ShopThreeMainArea";
import SidebarMain from "../SharedComponents/Sidebars/SidebarMain";
 

const ShopSidebarThreeColsMain = () => {
  return (
    <>
      <BreadCrumb title="Shop" />
      <ShopThreeMainArea />
      <SidebarMain />
    
    </>
  );
};

export default ShopSidebarThreeColsMain;
