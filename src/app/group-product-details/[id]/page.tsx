import GroupProductDetailsCard from "@/components/SharedComponents/GroupProductDetailsCard";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const GroupProductDetailsPage = ({ params }: { params: { id: number } }) => {
    const id = params.id;
  return (
    <>
      <MetaData pageTitle="group details">
        <Wrapper>
          <main>
              <GroupProductDetailsCard id={id}/>
             
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default GroupProductDetailsPage;
