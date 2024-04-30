 
"use client";
import { brand_data } from "@/data/brand-data";
import useGlobalContext from "@/hooks/use-context";
import React, { useState } from "react";

const FilterByBrandTwo = () => {
  const {
    setFilterBrand,
    filterBrand,
    setFilterSize,
    setFilterRating,
    setFilterSearch,
    setFilterColor,
    setFilterCategory,
    setSelectData,
    setFilterRange,

  } = useGlobalContext();
  const [open, setOpen] = useState(false);

  const handleBrandToggle = (brand: string) => {
    if (filterBrand.includes(brand)) {
      // If the brand is already selected, remove it
      setFilterBrand(
        filterBrand.filter((selectedBrand) => selectedBrand !== brand)
      );
      setFilterSize([]);
      setFilterRange([]);
      setFilterRating(0);
      setFilterSearch("");
      setFilterColor("");
      setFilterCategory("");

    } else {
      // If the brand is not selected, add it
      setFilterBrand([...filterBrand, brand]);
      setFilterSize([]);
      setFilterRange([]);
      setFilterRating(0);
      setFilterSearch("");
      setFilterColor("");
      setFilterCategory("");
      setSelectData("");
   
    }
  };

  return (
    <>
      <div className={`filter-widget ${open ? "child-content-hidden" : ""}`}>
        <h4
          onClick={() => setOpen(!open)}
          className="filter-widget-title drop-btn"
        >
          Brand
        </h4>
        <div
          className={`filter-widget-content ${open ? "content-hidden" : ""}`}
        >
          <div className="category-brands">
            {brand_data?.map((item) => (
              <div key={item?.id} className="category-brand">
                <input
                  className="check-box"
                  type="checkbox"
                  id={item?.brand}
                  checked={filterBrand.includes(item?.brand)} // Check if the brand is already selected
                  onChange={() => handleBrandToggle(item?.brand)} // Handle checkbox toggle
                />
                <label className="check-label" htmlFor={item?.brand}>
                  {item?.brand}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterByBrandTwo;
