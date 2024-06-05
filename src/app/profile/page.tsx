import SidebarMain from "@/components/SharedComponents/Sidebars/SidebarMain";
import OrderTrackModal from "@/components/profile/studentProfile/OrderTrackModal";
import UserProfileMain from "@/components/profile/studentProfile/UserProfileMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

import Protected from "@/hooks/useProtect";

const UserProfilePage = () => {
  return (
    <Protected>
      <MetaData pageTitle="Profile">
        <Wrapper>
          <main>
            <UserProfileMain />
            <OrderTrackModal />
            <SidebarMain vendorId="-1"/>
          </main>
        </Wrapper>
      </MetaData>
    </Protected>
  );
};

export default UserProfilePage;
