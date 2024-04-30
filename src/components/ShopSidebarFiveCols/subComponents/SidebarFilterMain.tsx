"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import FilterByCategory from "./FilterByCategory";
import FilterBySize from "./FilterBySize";
import FilterByRating from "./FilterByRating";
import FilterByColor from "./FilterByColor";
import FilterByBrand from "./FilterByBrand";
import FilterByRange from "./FilterByRange";
import FilterByTags from "./FilterByTags";
import useGlobalContext from "@/hooks/use-context";

const SidebarFilterMain: React.FC = () => {
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
          
          <FilterByCategory />
          <FilterBySize />
          <FilterByRating />
          <FilterByColor />
          <FilterByBrand />
          <FilterByRange />
          <FilterByTags />

        </div>
      </div>
    </>
  );
};

export default SidebarFilterMain;
