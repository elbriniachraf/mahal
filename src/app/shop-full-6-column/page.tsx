import ProductModal from "@/components/SharedComponents/ProductModal";
import ShopFullSixColsMain from "@/components/ShopFullSixCols/ShopFullSixColsMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const ShopFullSixCols = () => {
  return (
    <>
      <MetaData pageTitle="Shop Six"> 
        <Wrapper>
          <main>
            <ShopFullSixColsMain />
            <ProductModal />
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default ShopFullSixCols;
