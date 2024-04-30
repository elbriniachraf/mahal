import BecomeVendorMain from "@/components/become-vendor/BecomeVendorMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const becomeVendorPage = () => {
  return (
    <>
      <MetaData pageTitle="Become Vendor">
        <Wrapper>
          <main>
             <BecomeVendorMain/>
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default becomeVendorPage;
