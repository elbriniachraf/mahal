import React from "react";
import ProfileSection from "./ProfileSection";
import BreadCrumb from "@/components/SharedComponents/BreadCrumb";

const UserProfileMain = () => {
  return (
    <>
      <BreadCrumb title="Profile" />
      <ProfileSection />
    </>
  );
};

export default UserProfileMain;
