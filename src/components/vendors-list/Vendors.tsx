import React, { useState, useEffect } from "react";
import SingleVendorCard from "./SingleVendorCard";

const Vendors = () => {
  const [vendors, setVendors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await fetch("https://elbriniachraf.com/api/vendors");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setVendors(data.data); // Utilisez data.data pour accéder aux données des vendeurs
        setCurrentPage(data.current_page);
        setLastPage(data.last_page);
      } catch (error) {
        console.error("Error fetching vendors:", error);
      }
    };

    fetchVendors();
  }, []);

  const handlePageChange = async (e:any, page:any) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://elbriniachraf.com/api/vendors?page=${page}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setVendors(data.data);
      setCurrentPage(data.current_page);
    } catch (error) {
      console.error("Error fetching vendors:", error);
    }
  };

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
      <section className="product-area pt-120 pb-120">
        <div className="container container-small">
          <div className="row">
            {vendors.map((vendor:any) => (
              <div key={vendor.id} className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
                <SingleVendorCard item={vendor}/>
              </div>
            ))}
          </div>
          <div className="bd-basic__pagination d-flex justify-content-center mt-40 mb-45">
            <nav>
              <ul>
                {paginationLinks}
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vendors;
