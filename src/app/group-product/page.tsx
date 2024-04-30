import GroupProductMain from "@/components/group-product/GroupProductMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const GroupProductPage = () => {
  return (
    <>
      <MetaData pageTitle="Group Products">
        <Wrapper>
          <main>
            <GroupProductMain />
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default GroupProductPage;
