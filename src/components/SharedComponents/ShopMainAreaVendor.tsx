"use client";
import React from "react";
import SingleProductCard from "../SharedComponents/SingleProductCard";
import { useSearchForVendor } from "@/hooks/useSearch";
import FilterHeaderCommon from "../SharedComponents/Sidebars/FilterHeaderCommon";
import { useFilterByVendor } from "@/hooks/useFilterByVendor";
import SidebarFilterMainTwo from "../ShopSidebarFiveCols/subComponents/filterTwo/SidebarFilterMainTwo";
import Pagination from "./Pagination";
interface propsType {
  vendorId: string;
}
const ShopMainAreaVendor = ({ vendorId }: propsType) => {
  const filterData = useFilterByVendor(vendorId);
  const searchData = useSearchForVendor(vendorId as string);
  const mapData = searchData?.length ? searchData : filterData;
  return (
    <>
      <div className="shop-main-area pb-10">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <SidebarFilterMainTwo />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-12">
              <div className="shop-main-wrapper mb-60">
                <FilterHeaderCommon />
                <div className="products-wrapper products-5-column">
                  <>
                    {mapData?.map((item) => (
                      <SingleProductCard key={item.id} item={item} />
                    ))}
                  </>
                  
                </div>
                <Pagination/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopMainAreaVendor;
