import ForgotPasswordMain from "@/components/forgot-password/ForgotPasswordMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const ForgotPassword = () => {
  return (
    <>
      <MetaData pageTitle="Forgot password">
        <Wrapper>
          <main>
            <ForgotPasswordMain />
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default ForgotPassword;
