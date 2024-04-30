"use client";
import GetRatting from "@/hooks/GetRatting";
import useGlobalContext from "@/hooks/use-context";
import React, { useState } from "react";

const FilterByRating = () => {
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
  const handleFilter = (rating: number) => {
    setFilterSize([]);
    setFilterBrand([]);
    setFilterRange([]);
    setFilterRating(rating);
    setFilterSearch("");
    setFilterColor("");
    setFilterCategory("");
    setSelectData("");
    setSideFilterOpen(!sideFilterOpen);
  };

  const ratingArray = [
    {
      id: 1,
      rating: 5,
      lavel: "five",
    },
    {
      id: 2,
      rating: 4,
      lavel: "four",
    },
    {
      id: 3,
      rating: 3,
      lavel: "three",
    },
    {
      id: 4,
      rating: 2,
      lavel: "two",
    },
    {
      id: 5,
      rating: 1,
      lavel: "one",
    },
  ];

  return (
    <>
      <div className={`filter-widget ${open ? "child-content-hidden" : ""}`}>
        <h4
          onClick={() => setOpen(!open)}
          className="filter-widget-title drop-btn"
        >
          Rating
        </h4>
        <div
          className={`filter-widget-content ${open ? "content-hidden" : ""}`}
        >
          <div className="category-ratings">
            {ratingArray?.map((item) => (
              <div
                onClick={() => handleFilter(item?.rating)}
                key={item?.id}
                className="category-rating"
              >
                <input
                  className="radio-box"
                  type="radio"
                  id={item?.lavel}
                  name="rating"
                />
                <label className="radio-star" htmlFor={item?.lavel}>
                  <GetRatting averageRating={item?.rating} />
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterByRating;
