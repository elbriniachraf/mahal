"use client"
import React from "react";
import SidebarFilterMain from "../ShopSidebarFiveCols/subComponents/SidebarFilterMain";
import SingleProductCard from "../SharedComponents/SingleProductCard";
import { useFilter } from "@/hooks/useFilter";
import { useSearch } from "@/hooks/useSearch";
import FilterHeaderCommon from "../SharedComponents/Sidebars/FilterHeaderCommon";
import SidebarFilterMainTwo from "../ShopSidebarFiveCols/subComponents/filterTwo/SidebarFilterMainTwo";
import Pagination from "../SharedComponents/Pagination";

const ShopFourMainArea = () => {
  const filterData = useFilter(0, 28);
  const searchData = useSearch()
  const mapData = searchData?.length ? searchData :  filterData
  return (
    <>
      <div className="shop-main-area pt-120 pb-10">
        <div className="container">
          <div className="row">
            {/* left side content */}

            <div className="col-xl-9 col-lg-8 col-md-12">
              <div className="shop-main-wrapper mb-60">
              <FilterHeaderCommon/>

                {/* card wrapper */}
                <div className="products-wrapper products-4-column">
                  {mapData.map((item) => (
                    <SingleProductCard key={item.id} item={item} />
                  ))}
                </div>
                <Pagination/>
              </div>
            </div>

            {/* end left side content */}

            {/* right side filter and search bar */}

            <div className="col-xl-3 col-lg-4 col-md-6">
              <SidebarFilterMainTwo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopFourMainArea;
