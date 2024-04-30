import ProductModal from "@/components/SharedComponents/ProductModal";
import ShopDetailsMain from "@/components/shop-details/ShopDetailsMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const ShopDetailisPage = () => {
  const id = 34;
  return (
    <>
      <MetaData pageTitle="Shop Details">
        <Wrapper>
          <main>
            <ShopDetailsMain id={id} />
            <ProductModal />
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default ShopDetailisPage;
