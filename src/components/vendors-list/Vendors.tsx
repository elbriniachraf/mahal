import React from "react";
import SingleVendorCard from "./SingleVendorCard";
import { vendor_data } from "@/data/vendor-list-data";

const Vendors = () => {
  return (
    <>
      <section className="product-area pt-120 pb-120">
        <div className="container container-small">
          <div className="row">
            {vendor_data?.map((item) => (
              <div key={item.id} className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
                 <SingleVendorCard item={item}/>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Vendors;
