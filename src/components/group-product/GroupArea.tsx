import { group_Package_Data } from "@/data/group-pacakge-data";
import React from "react";
import Pagination from "../SharedComponents/Pagination";
import SingleGroupProductCard from "../SharedComponents/SingleGroupProductCard";
 

const GroupArea = () => {
  return (
    <>
      <div className="shop-main-area pt-120 pb-10">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="shop-main-wrapper mb-60">
                <div className="products-wrapper products-full-6-column">
                  {group_Package_Data?.map((item) => (
                    <SingleGroupProductCard key={item.id} item={item} />
                  ))}
                </div>
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupArea;
