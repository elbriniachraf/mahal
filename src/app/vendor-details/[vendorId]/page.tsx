"use client";
import ProductModal from "@/components/SharedComponents/ProductModal";
import VedorDetailsMain from "@/components/vendor-details/VedorDetailsMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const VendorDetailsPage = ({ params }: { params: { vendorId: string } }) => {
  const vendorId = params.vendorId;
  return (
    <>
      <MetaData pageTitle="vendor details">
        <Wrapper>
          <main>
            <VedorDetailsMain vendorId={vendorId}/>
            <ProductModal/>
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default VendorDetailsPage;
