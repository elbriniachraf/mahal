 
"use client";
import { filterCategoryData } from "@/data/category-filter-data";
import useGlobalContext from "@/hooks/use-context";
import { filterCategoryType } from "@/interFace/interFace";
import React, { useState } from "react";
const FilterByCategoryTwo = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const {
    setFilterBrand,
    setFilterSize,
    setFilterRating,
    setFilterSearch,
    setFilterColor,
    setFilterCategory,
    setSelectData,
    setFilterRange,
  } = useGlobalContext();
  const handleFilterCategory = (item: filterCategoryType) => {
    setFilterSize([]);
    setFilterBrand([]);
    setFilterRating(0);
    setFilterSearch("");
    setFilterColor("");
    setFilterCategory(item?.category);
    setSelectData("");
    setFilterRange([]);
    setActive(item.id)
  };

  return (
    <>
      <div className={`filter-widget ${open ? "child-content-hidden" : ""}`}>
        <h4
          onClick={() => setOpen(!open)}
          className="filter-widget-title drop-btn"
        >
          Category
        </h4>
        <div
          className={`filter-widget-content ${open ? "content-hidden" : ""}`}
        >
          <div className="category-items">
            {filterCategoryData?.map((item) => (
              <button
                onClick={() => handleFilterCategory(item)}
                key={item?.id}
                type="button"
                className={`category-item ${active === item.id ? "active-category": ""}`}
              >
                <div className="category-name">{item?.category}</div>{" "}
                <span className="category-items-number">{item?.total}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterByCategoryTwo;
