import WishlistMain from "@/components/wishlist/WishlistMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const WishListPage = () => {
  return (
    <>
      

      <MetaData pageTitle="Wishlist">
      <Wrapper>
        <main>
          <WishlistMain />
        </main>
      </Wrapper>
      </MetaData>
    </>
  );
};

export default WishListPage;
