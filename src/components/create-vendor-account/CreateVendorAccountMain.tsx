import React from "react";
import SidebarMain from "../SharedComponents/Sidebars/SidebarMain";
import BreadCrumb from "../SharedComponents/BreadCrumb";
import CreateVendorForm from "@/form/CreateVendorForm";

const CreateVendorAccountMain = () => {
  return (
    <>
      <BreadCrumb title="Create Vendor Account" />
       <CreateVendorForm/>
      <SidebarMain />
    </>
  );
};

export default CreateVendorAccountMain;
