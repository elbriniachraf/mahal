import React, { useState } from "react";
import RangeSimple from "./RangeSimple";
import useGlobalContext from "@/hooks/use-context";

const FilterByRange = () => {
  const [open, setOpen] = useState(false);
  const {filterRange} = useGlobalContext()
  return (
    <>
      <div className={`filter-widget ${open ? "child-content-hidden" : ""}`}>
        <h4 onClick={() => setOpen(!open)} className="filter-widget-title drop-btn">Price</h4>
        <div className={`filter-widget-content ${open ? "content-hidden" : ""}`}>
          <div className="filter-price">
            <div className="slider-range"> 
              <div className="slider-range-bar">
                <RangeSimple/> 
              </div>
              <p>
                <label htmlFor="amount">Price : {filterRange?.length ? <>${filterRange[0]} - ${filterRange[1]}</> : <>$0 - $100</>}  </label>
                <input type="text" id="amount" className="amount" readOnly />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterByRange;
