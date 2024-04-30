import Link from "next/link";
import React from "react";
import SizeGuide from "./subComponent/SizeGuide";
import DeliveryGuide from "./subComponent/DeliveryGuide";
import QuestionGuide from "./subComponent/QuestionGuide";

const ProductInfo = () => {
  return (
    <>
      <div>
        <div className="product_block_info">
          <button
            type="button"
            className="quick-view-btn"
            data-toggle="tooltip"
            data-placement="top"
            title="Quick View"
            data-bs-toggle="modal"
            data-bs-target="#sizeguide"
          >
            <i className="fa-sharp fa-solid fa-maximize"></i> Size Guide
          </button>
          <button
            type="button"
            className="quick-view-btn"
            data-toggle="tooltip"
            data-placement="top"
            title="Quick View"
            data-bs-toggle="modal"
            data-bs-target="#delivery"
          >
            <i className="fa-regular fa-truck"></i> Delivery and Return
          </button>
          <button
            type="button"
            className="quick-view-btn"
            data-toggle="tooltip"
            data-placement="top"
            title="Quick View"
            data-bs-toggle="modal"
            data-bs-target="#askQuestino"
          >
            <i className="fa-regular fa-message"></i> Ask about this product
          </button>
        </div>

        <SizeGuide />
        <DeliveryGuide />
        <QuestionGuide />
      </div>
    </>
  );
};

export default ProductInfo;
