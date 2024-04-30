import React from "react";
import FeaturedProductSingleCard from "./FeaturedProductSingleCard";
import {featured_data } from "@/data/featured-product-data";
const FeaturedProduct = () => {
  return (
    <>
      <section className="featured-area pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center">
                <h2 className="section-main-title mb-50">Featured Products</h2>
              </div>
            </div>
          </div>
          <div className="featured-products-wrapper">
            <div className="row">
              <div className="col-xxl-6 col-lg-12 order-xxl-last">
                <div className="row">
                  {featured_data?.slice(2, 6)?.map((featured) => (
                    <div key={featured.id} className="col-lg-6 col-md-6">
                      <FeaturedProductSingleCard featured={featured} propsClass="featured-small"/>
                    </div>
                  ))}
                </div>
              </div>

              {featured_data?.slice(0, 1)?.map((featured) => (
                <div
                  key={featured.id}
                  className="col-lg-6 col-md-6 order-xxl-first larege"
                >
                   <FeaturedProductSingleCard featured={featured} propsClass ="featured-large"/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProduct;
