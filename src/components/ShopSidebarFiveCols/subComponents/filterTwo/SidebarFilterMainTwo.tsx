 

 
"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
 
import useGlobalContext from "@/hooks/use-context";
import FilterByCategoryTwo from "./FilterByCategoryTwo";
import FilterBySizeTwo from "./FilterBySizeTwo";
import FilterByRatingTwo from "./FilterByRatingTwo";
import FilterByColorTwo from "./FilterByColorTwo";
import FilterByBrandTwo from "./FilterByBrandTwo";
import FilterByRange from "../FilterByRange";
import FilterByTags from "../FilterByTags";

const SidebarFilterMainTwo: React.FC = () => {
  const {
    setFilterBrand,
    setFilterSize,
    setFilterRating,
    setFilterSearch,
    setFilterColor,
    setFilterCategory,
    setSelectData,
  } = useGlobalContext();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setFilterSearch(event.target.value);
    setFilterSize([]);
    setFilterBrand([]);
    setFilterRating(0);
    setFilterColor("");
    setFilterCategory("");
    setSelectData("");
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFilterSearch(searchQuery);
    setFilterSize([]);
    setFilterBrand([]);
    setFilterRating(0);
    setFilterColor("");
    setFilterCategory("");
    setSelectData("");
  };

  return (
    <>
      <div className="sidebar-widget-wrapper mb-110 d-none d-lg-block">
        <div className="product-filters mb-50">
          <div className="filter-widget-content">
            <div className="filter-widget-search">
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  placeholder="Search here.."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />
                <button type="submit">
                  <i className="fal fa-search"></i>
                </button>
              </form>
            </div>
          </div>
          
          <FilterByCategoryTwo />
          <FilterBySizeTwo />
          <FilterByRatingTwo />
          <FilterByColorTwo />
          <FilterByBrandTwo />
          <FilterByRange />
          <FilterByTags />

        </div>
      </div>
    </>
  );
};

export default SidebarFilterMainTwo;
