import React from "react";
import BreadCrumb from "../SharedComponents/BreadCrumb";
import RegisterForm from "@/form/RegisterForm";
import SidebarMain from "../SharedComponents/Sidebars/SidebarMain";

const RegisterMain = () => {
  return (
    <>
      <BreadCrumb title="Register" />
      <RegisterForm />
      <SidebarMain vendorId="-1"/>
    </>
  );
};

export default RegisterMain;
