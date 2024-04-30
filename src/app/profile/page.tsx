import SidebarMain from "@/components/SharedComponents/Sidebars/SidebarMain";
import OrderTrackModal from "@/components/profile/studentProfile/OrderTrackModal";
import UserProfileMain from "@/components/profile/studentProfile/UserProfileMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const UserProfilePage = () => {
  return (
    <>
      <MetaData pageTitle="Profile">
        <Wrapper>
          <main>
            <UserProfileMain />
            <OrderTrackModal />
            <SidebarMain/>
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default UserProfilePage;
