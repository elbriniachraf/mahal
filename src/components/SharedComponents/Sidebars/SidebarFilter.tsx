import FilterByBrand from "@/components/ShopSidebarFiveCols/subComponents/FilterByBrand";
import FilterByCategory from "@/components/ShopSidebarFiveCols/subComponents/FilterByCategory";
import FilterByColor from "@/components/ShopSidebarFiveCols/subComponents/FilterByColor";
import FilterByRange from "@/components/ShopSidebarFiveCols/subComponents/FilterByRange";
import FilterByRating from "@/components/ShopSidebarFiveCols/subComponents/FilterByRating";
import FilterBySize from "@/components/ShopSidebarFiveCols/subComponents/FilterBySize";
import FilterByTags from "@/components/ShopSidebarFiveCols/subComponents/FilterByTags";
import useGlobalContext from "@/hooks/use-context";
import React, { ChangeEvent, FormEvent, useState } from "react";

const SidebarFilter = () => {
  const {
    setFilterBrand,
    setFilterSize,
    setFilterRating,
    setFilterSearch,
    setFilterColor,
    setFilterCategory,
    sideFilterOpen,
    setSideFilterOpen,
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
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFilterSearch(searchQuery);
    setFilterSize([]);
    setFilterBrand([]);
    setFilterRating(0);
    setFilterColor("");
    setFilterCategory("");
    setSideFilterOpen(!sideFilterOpen)
  };
  return (
    <>
      <div className="fix">
        <div className={`sidebar-action sidebar-filter ${sideFilterOpen ? "filter-open" : "" }`}>
          <button
            onClick={() => setSideFilterOpen(!sideFilterOpen)}
            className="close-sidebar"
          >
            Close<i className="fal fa-times"></i>
          </button>
          <h4 className="sidebar-action-title">Filter Items</h4>
          <div className="product-filters mb-50">
            <div className="filter-widget">
              <h4 className="filter-widget-title drop-btn">Search</h4>
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
      </div>
    </>
  );
};

export default SidebarFilter;
