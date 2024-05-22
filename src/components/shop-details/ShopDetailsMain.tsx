import React from "react";
import BreadCrumb from "../SharedComponents/BreadCrumb";
import ShopDetailsArea from "./ShopDetailsArea";
import RelatedProductSlider from "./RelatedProductSlider";
import { idType } from "@/interFace/interFace";
import SidebarMain from "../SharedComponents/Sidebars/SidebarMain";
 

const ShopDetailsMain = ({ id }: idType) => {
  return (
    <>
      <ShopDetailsArea id={id} />
      <RelatedProductSlider id={id} />
     
      <SidebarMain vendorId="-1" />
    </>
  );
};

export default ShopDetailsMain;
