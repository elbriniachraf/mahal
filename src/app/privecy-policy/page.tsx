import PrivacyPolicyMain from "@/components/privecy-policy/PrivacyPolicyMain";
import MetaData from "@/hooks/useMetaData";
import WrapperStyleThree from "@/layout/WrapperStyleThree";
import React from "react";

const PrivecyPolicyPage = () => {
  return (
    <>
      <MetaData pageTitle="Privecy Policy">
        <WrapperStyleThree>
          <main>
            <PrivacyPolicyMain />
          </main>
        </WrapperStyleThree>
      </MetaData>
    </>
  );
};

export default PrivecyPolicyPage;
