import VendorListMain from "@/components/vendors-list/VendorListMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const VendorsListPage = () => {
  return (
    <>
      <MetaData pageTitle="Vendor List">
        <Wrapper>
          <main>
               <VendorListMain/>
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default VendorsListPage;
