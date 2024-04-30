import ProductModal from "@/components/SharedComponents/ProductModal";
import ShopFullFourMain from "@/components/ShopFullFour/ShopFullFourMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const ShopFullFourpage = () => {
  return (
    <>
      <MetaData pageTitle="Shop Four">
        <Wrapper>
          <main>
            <ShopFullFourMain />
            <ProductModal />
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default ShopFullFourpage;
