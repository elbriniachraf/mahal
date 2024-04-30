import CheckoutMain from "@/components/checkout/CheckoutMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const checkoutPage = () => {
  return (
    <>
      <MetaData pageTitle="Checkout">
        <Wrapper>
          <main>
            <CheckoutMain />
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default checkoutPage;
