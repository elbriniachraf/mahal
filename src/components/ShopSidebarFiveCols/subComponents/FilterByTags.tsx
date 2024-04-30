import Link from "next/link";
import React from "react";

const FilterByTags = () => {
  return (
    <>
      <div className="filter-widget">
        <h4 className="filter-widget-title drop-btn">Tags</h4>
        <div className="sidebar__widget-content">
          <div className="sidebar__tag shop_tag">
            <Link href="#" className="category-tag">
              Fashion
            </Link>
            <Link href="#" className="category-tag">
              Hats
            </Link>
            <Link href="#" className="category-tag">
              Sandal
            </Link>
            <Link href="#" className="category-tag">
              Bags
            </Link>
            <Link href="#" className="category-tag">
              Snacker
            </Link>
            <Link href="#" className="category-tag">
              Denim
            </Link>
            <Link href="#" className="category-tag">
              Sunglasses
            </Link>
            <Link href="#" className="category-tag">
              Beachwear
            </Link>
            <Link href="#" className="category-tag">
              Vagabond
            </Link>
            <Link href="#" className="category-tag">
              Trend
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterByTags;
