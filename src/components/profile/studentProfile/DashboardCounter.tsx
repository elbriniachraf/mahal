"use client";
import CountUpContent from "@/components/common/counter/CountUpContent";
import {
  useTotalProductCount,
  useUniqueWishlstCount,
} from "@/hooks/useCartQuantity";
import React from "react";
const DashboardCounter = () => {
  const cartQuantity = useTotalProductCount();
  const WishlistQuantity = useUniqueWishlstCount();
  return (
    <div className="row">
      <div className="col-xl-4 col-lg-6 col-md-4">
        <div className="counter-wrapper text-center mb-30">
          <div className="counter-icon">
            <div className="counter-icon-wrap">{/* incon will be here */}</div>
            <div className="count-number">
              <CountUpContent number={3} text="" />
              <p> My purches </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-4">
        <div className="counter-wrapper text-center mb-30">
          <div className="counter-icon">
            <div className="counter-icon-wrap">{/* incon will be here */}</div>
            <div className="count-number">
              <CountUpContent number={cartQuantity} text="" />
              <p> My Cart </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-4">
        <div className="counter-wrapper text-center mb-30">
          <div className="counter-icon">
            <div className="counter-icon-wrap">{/* incon will be here */}</div>
            <div className="count-number">
              <CountUpContent number={WishlistQuantity} text="" />
              <p> My Wishlist </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCounter;
