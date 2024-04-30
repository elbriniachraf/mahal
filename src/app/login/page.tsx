import LoginMain from "@/components/login/LoginMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const LoginPage = () => {
  return (
    <>
      <MetaData pageTitle="Login">
        <Wrapper>
          <main>
            <LoginMain />
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default LoginPage;
