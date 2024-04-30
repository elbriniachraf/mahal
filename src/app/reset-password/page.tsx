import ResetPasswordMain from "@/components/reset-password/ResetPasswordMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const ResetPassword = () => {
  return (
    <>
      <MetaData pageTitle="Reset password">
        <Wrapper>
          <main>
            <ResetPasswordMain />
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default ResetPassword;
