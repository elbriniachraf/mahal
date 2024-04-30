import ProductModal from "@/components/SharedComponents/ProductModal";
import ShopSidebarFourColsMain from "@/components/ShopSidebarFourCols/ShopSidebarFourColsMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const ShopSidebarFourColspage = () => {
  return (
    <>
      <MetaData pageTitle="Shop Sidebar Four">
        <Wrapper>
          <main>
            <ShopSidebarFourColsMain />
            <ProductModal />
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default ShopSidebarFourColspage;
