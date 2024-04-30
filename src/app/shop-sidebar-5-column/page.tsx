import ProductModal from "@/components/SharedComponents/ProductModal";
import ShopSidebarFiveMain from "@/components/ShopSidebarFiveCols/ShopSidebarFiveMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const ShopSidebarFiveCols = () => {
  return (
    <>
      <MetaData pageTitle="Shop Sidebar Five">
        <Wrapper>
          <main>
            <ShopSidebarFiveMain />
            <ProductModal />
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default ShopSidebarFiveCols;
