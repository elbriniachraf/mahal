import ProductModal from "@/components/SharedComponents/ProductModal";
import ShopFullFiveMain from "@/components/ShopFullFiveCols/ShopFullFiveMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const ShopFullFiveColspage = () => {
  return (
    <>
      <MetaData pageTitle="Shop Five">
        <Wrapper>
          <main>
            <ShopFullFiveMain />
            <ProductModal />
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default ShopFullFiveColspage;
