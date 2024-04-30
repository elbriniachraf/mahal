import EmailVerificaitonMain from "@/components/email-verificaiton/EmailVerificaitonMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const EmailVerificationPage = () => {
  return (
    <>
      <MetaData pageTitle="Email Verification">
        <Wrapper>
          <main>
            <EmailVerificaitonMain />
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default EmailVerificationPage;
