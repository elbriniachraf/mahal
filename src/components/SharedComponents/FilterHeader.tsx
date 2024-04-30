"use client";
import { sortProduct_data } from "@/data/nice-select-data";
import useGlobalContext from "@/hooks/use-context";
import { usePathname } from "next/navigation";
import React from "react";
import NiceSelect from "../common/NiceSelect";
import { products_data } from "@/data/products-data";

const FilterHeader = () => {
  const { sideFilterOpen, setSideFilterOpen,totalShowingProduct } = useGlobalContext();
  const pathName = usePathname();
  const selectHandler = () => {};
  return (
    <>
      <div className="shop-main-wrapper-head mb-30">
        <div className="swowing-list">
          Showing <span> {totalShowingProduct} of  {products_data?.length} </span> Products
        </div>
        <div className="sort-type-filter">
          <div className="sorting-type">
            <span>Sort by : </span>
            <NiceSelect
              options={sortProduct_data}
              defaultCurrent={0}
              onChange={selectHandler}
              name="sorting-list"
              className="sorting-list"
            />
          </div>
          {pathName === "/shop-full-6-column" ||
          pathName === "/shop-full-5-column" ||
          pathName === "/shop-full-4-column" ? (
            <>
              {" "}
              <div className="action-item action-item-filter">
                <button
                  onClick={() => setSideFilterOpen(!sideFilterOpen)}
                  type="button"
                  className="view-filter-button"
                >
                  <i className="flaticon-filter"></i>
                </button>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default FilterHeader;
