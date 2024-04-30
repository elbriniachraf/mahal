import React from "react";
import SidebarMain from "../SharedComponents/Sidebars/SidebarMain";
import ShopMainAreaVendor from "../SharedComponents/ShopMainAreaVendor";
import VendorProfile from "./VendorProfile";

interface propsType{
    vendorId:string
}

const VedorDetailsMain = ({vendorId}:propsType) => {
  return (
    <>
      <VendorProfile vendorId={vendorId}/>
      <ShopMainAreaVendor vendorId={vendorId}/>
      <SidebarMain />
    </>
  );
};

export default VedorDetailsMain;
