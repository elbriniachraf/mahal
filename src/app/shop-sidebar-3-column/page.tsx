import ProductModal from "@/components/SharedComponents/ProductModal";
import ShopSidebarThreeColsMain from "@/components/ShopSidebarThreeCols/ShopSidebarThreeColsMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const ShopSidebarThreeCols = () => {
  return (
    <>
      <MetaData pageTitle="Shop Sidebar Three">
        <Wrapper>
          <main>
            <ShopSidebarThreeColsMain />
            <ProductModal />
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default ShopSidebarThreeCols;
