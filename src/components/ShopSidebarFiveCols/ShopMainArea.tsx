import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleProductCard from "../SharedComponents/SingleProductCard";
import { useFilter } from "@/hooks/useFilter";
import { useSearch } from "@/hooks/useSearch";
import FilterHeaderCommon from "../SharedComponents/Sidebars/FilterHeaderCommon";
import SidebarFilterMainTwo from "./subComponents/filterTwo/SidebarFilterMainTwo";
import Pagination from "../SharedComponents/Pagination";
import { ProductsType } from "@/interFace/interFace";

const ShopMainArea = () => {
  const filterData = useFilter(0, 25);
  const searchData = useSearch();
  const [productCards, setProductCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/products?page=${currentPage}`);

        if (response.data.data && Array.isArray(response.data.data)) {
          const products = response.data.data;
          const productCards = products.map((item: any) => (
            <SingleProductCard key={item.id} item={item} />
          ));
          setProductCards(productCards);

          // Mettre à jour le numéro de la page courante et le nombre total de pages
          setCurrentPage(response.data.current_page);
          setLastPage(response.data.last_page);
        } else {
          console.error("Error fetching products: Invalid response format");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();

    // Clean-up function
    return () => {
      // You can add any clean-up code here if needed
    };
  }, [currentPage]); // Mettre à jour les produits lorsque la page courante change

  const handlePageChange = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, page: React.SetStateAction<number>) => {
    e.preventDefault(); // Empêcher le rechargement de la page
    setCurrentPage(page);
  };

  const mapData = searchData.length ? searchData : filterData;

  // Générer les liens de pagination en fonction du nombre total de pages
  const paginationLinks = [];
  const visiblePages = 5;
  const halfVisible = Math.floor(visiblePages / 2);
  let startPage = currentPage - halfVisible;
  let endPage = currentPage + halfVisible;

  if (startPage < 1) {
    startPage = 1;
    endPage = visiblePages;
  }

  if (endPage > lastPage) {
    endPage = lastPage;
    startPage = lastPage - visiblePages + 1;
    if (startPage < 1) {
      startPage = 1;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    paginationLinks.push(
      <li key={i} className={i === currentPage ? "active" : ""}>
        <a href="" onClick={(e) => handlePageChange(e, i)}>{i}</a>
      </li>
    );
  }

  return (
    <>
      <div className="shop-main-area pt-120 pb-10">
        <div className="container">
          <div className="row">
            {/* left side content */}
            <div className="col-xl-9 col-lg-8 col-md-12">
              <div className="shop-main-wrapper mb-60">
                <FilterHeaderCommon />
                {/* card wrapper */}
                <div className="products-wrapper products-5-column">
                  {productCards}
                </div>
                {/* Pagination */}
                <div className="bd-basic__pagination d-flex justify-content-center mt-40 mb-45">
                  <nav>
                    <ul>
                      {paginationLinks}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* end left side content */}
            {/* right side filter and search bar */}
            <div className="col-xl-3 col-lg-4 col-md-6">
              <SidebarFilterMainTwo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopMainArea;
