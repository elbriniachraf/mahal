import React, { useState, useEffect } from "react";
import axios from "axios";
import { filterCategoryType } from "@/interFace/interFace";
import useGlobalContext from "@/hooks/use-context";
interface propsType {
  vendorId: string;
}
const FilterByCategory = ({ vendorId }: propsType) => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);
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
    // Extract vendorId from URL if available


    const fetchData = async () => {
    const finalVendorId = parseInt(vendorId);


      console.log("vendor id  ",finalVendorId);
      console.log(finalVendorId==-1);
      
      if (finalVendorId == -1) {
      console.log('finalVendorId');
        
        const response = await axios.get("https://elbriniachraf.com/api/categories");
        setCategories(response.data.categories); // Supposons que votre réponse renvoie un tableau d'objets de type filterCategoryType
      } else {
      console.log('finalVendorId2');

        const response = await axios.get(`https://elbriniachraf.com/api/vendors/${finalVendorId}`);
        const categoriesString: string = response.data.categories; // Supposons que c'est une chaîne de caractères
        const categoriesArray: string[] = categoriesString.split(",").map((category: string) => category.trim());
      console.log(categoriesArray);

        setCategories(categoriesArray);

      }
    };

    fetchData();
  }, [vendorId]);

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
          Categories
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
