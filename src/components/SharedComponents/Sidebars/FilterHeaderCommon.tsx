"use client";
import { sortProduct_data } from "@/data/nice-select-data";
import useGlobalContext from "@/hooks/use-context";
import React from "react";
import { products_data } from "@/data/products-data";
import NiceSelect from "@/components/common/NiceSelect";
const FilterHeaderCommon = () => {
  const { sideFilterOpen, setSideFilterOpen, totalShowingProduct } = useGlobalContext();
  const selectHandler = () => {};
  return (
    <>
      <div className="shop-main-wrapper-head mb-30">
        <div className="swowing-list">
          Showing{" "}
          <span>
            {" "}
             12 of {products_data?.length}{" "}
          </span>{" "}
          Products
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
          <div className="action-item action-item-filter d-lg-none">
            <button
              onClick={() => setSideFilterOpen(!sideFilterOpen)}
              type="button"
              className="view-filter-button"
            >
              <i className="flaticon-filter"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterHeaderCommon;
