"use client";
import { size_data } from "@/data/product-size-data";
import useGlobalContext from "@/hooks/use-context";
import React, { useState } from "react";
const FilterBySize = () => {
  const {
    setFilterBrand,
    setFilterSize,
    filterSize,
    setFilterRating,
    setFilterSearch,
    setFilterColor,
    setFilterCategory,
    setSelectData,
    setFilterRange,
    sideFilterOpen,
    setSideFilterOpen,
  } = useGlobalContext();
  const [open, setOpen] = useState(false);

  const handleSizeToggle = (size: string) => {
    if (filterSize.includes(size)) {
      // If the brand is already selected, remove it
      setFilterSize(
        filterSize.filter((selectedBrand) => selectedBrand !== size)
      );
      setFilterBrand([]);
      setFilterRange([]);
      setFilterRating(0);
      setFilterSearch("");
      setFilterColor("");
      setFilterCategory("");
      setSideFilterOpen(!sideFilterOpen)
    } else {
      // If the brand is not selected, add it
      setFilterSize([...filterSize, size]);
      setFilterBrand([]);
      setFilterRange([]);
      setFilterRating(0);
      setFilterSearch("");
      setFilterColor("");
      setFilterCategory("");
      setSelectData("");
      setSideFilterOpen(!sideFilterOpen)
    }
  };

  return (
    <>
      <div className={`filter-widget ${open ? "child-content-hidden" : ""}`}>
        <h4
          onClick={() => setOpen(!open)}
          className="filter-widget-title drop-btn"
        >
          Size
        </h4>
        <div
          className={`filter-widget-content ${open ? "content-hidden" : ""}`}
        >
          <div className="category-sizes">
            {size_data?.map((item) => (
              <div key={item?.id} className="category-size">
                <input
                  checked={filterSize.includes(item?.size)}
                  onChange={() => handleSizeToggle(item?.size)}
                  className="check-box"
                  type="checkbox"
                  id={item?.size}
                />
                <label className="check-label" htmlFor={item.size}>
                  {item?.title}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterBySize;
