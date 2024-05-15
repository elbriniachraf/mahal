import React, { useState, useEffect } from "react";
import axios from "axios";
import { filterCategoryType } from "@/interFace/interFace";
import useGlobalContext from "@/hooks/use-context";

const FilterByCategory = () => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState<filterCategoryType[]>([]);
  const [active, setActive] = useState<number>(0);
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

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/categories");
        setCategories(response.data.categories); // Supposons que votre réponse renvoie un tableau d'objets de type filterCategoryType
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleFilterCategory = (item: filterCategoryType) => {
    setFilterSize([]);
    setFilterBrand([]);
    setFilterRating(0);
    setFilterSearch("");
    setFilterColor("");
    setFilterCategory(item?.category);
    setSelectData("");
    setFilterRange([]);
    setSideFilterOpen(!sideFilterOpen);
    setActive(item.id);
  };

  return (
    <>
      <div className={`filter-widget ${open ? "child-content-hidden" : ""}`}>
        <h4 onClick={() => setOpen(!open)} className="filter-widget-title drop-btn">
          Categorys
        </h4>
        <div className={`filter-widget-content ${open ? "content-hidden" : ""}`}>
          <div className="category-items">
            {categories.map((item) => (
              <button
                onClick={() => handleFilterCategory(item)}
                key={item?.id}
                type="button"
                className={`category-item ${active === item.id ? "active-category" : ""}`}
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

export default FilterByCategory;
