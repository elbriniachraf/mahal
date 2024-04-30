"use client";
import { productColor_data } from "@/data/product-color-data";
import { getColorClass } from "@/hooks/condition-class";
import useGlobalContext from "@/hooks/use-context";
import React, { useState } from "react";

const FilterByColor = () => {
  const [open, setOpen] = useState(false);
  const {
    setFilterBrand,
    setFilterSize,
    setFilterRating,
    setFilterSearch,
    setFilterColor,
    setFilterCategory,
    setSelectData,
    setFilterRange,
    sideFilterOpen,
    setSideFilterOpen,
  } = useGlobalContext();
  const handleFilterColor = (color: string) => {
    setFilterSize([]);
    setFilterBrand([]);
    setFilterRange([]);
    setFilterRating(0);
    setFilterSearch("");
    setFilterCategory("");
    setSelectData("");
    setFilterColor(color);
    setSideFilterOpen(!sideFilterOpen);
  };

  return (
    <>
      <div className={`filter-widget ${open ? "child-content-hidden" : ""}`}>
        <h4
          onClick={() => setOpen(!open)}
          className="filter-widget-title drop-btn"
        >
          Colour
        </h4>
        <div
          className={`filter-widget-content ${open ? "content-hidden" : ""}`}
        >
          <div className="category-colours">
            <div className="category-color">
              <ul className="product-color-nav">
               
                {productColor_data?.map((item) => {
                  const dynamicClass = getColorClass(item?.productColor)
                  return (
                    <li
                      onClick={() => handleFilterColor(item?.productColor)}
                      key={item?.id}
                      className={dynamicClass}
                    ></li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterByColor;
