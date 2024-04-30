import React from "react";
import BreadCrumb from "../SharedComponents/BreadCrumb";
import ShopDetailsArea from "./ShopDetailsArea";
import RelatedProductSlider from "./RelatedProductSlider";
import { idType } from "@/interFace/interFace";
import SidebarMain from "../SharedComponents/Sidebars/SidebarMain";
 

const ShopDetailsMain = ({ id }: idType) => {
  return (
    <>
      <BreadCrumb title="Shop Details" />
      <ShopDetailsArea id={id} />
      <RelatedProductSlider id={id} />
     
      <SidebarMain />
    </>
  );
};

export default ShopDetailsMain;
