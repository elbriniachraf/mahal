import CreateVendorAccountMain from "@/components/create-vendor-account/CreateVendorAccountMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const CreateVendorAccountPage = () => {
  return (
    <>
      <MetaData pageTitle="Create Vendor">
        <Wrapper>
          <main>
            <CreateVendorAccountMain/>
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default CreateVendorAccountPage;
