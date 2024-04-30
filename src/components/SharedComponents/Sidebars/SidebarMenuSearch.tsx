"use client";
import useGlobalContext from "@/hooks/use-context";
import { useSearch } from "@/hooks/useSearch";
import Image from "next/image";
import Link from "next/link";
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

const SidebarMenuSearch = () => {
  // search
  const [openSearchBox, setOpenSearchBox] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const searchRef = useRef(null);
  const {
    setFilterBrand,
    setFilterSize,
    setFilterRating,
    setFilterSearch,
    setFilterColor,
    setFilterCategory,
    sideMenuOpen,
    setSideMenuOpen,
  } = useGlobalContext();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const currentRef = searchRef.current as HTMLElement | null;
      if (
        currentRef &&
        currentRef.contains &&
        !currentRef.contains(event.target as Node)
      ) {
        setOpenSearchBox(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setFilterSearch(event.target.value);
    setFilterSize([]);
    setFilterBrand([]);
    setFilterRating(0);
    setFilterColor("");
    setFilterCategory("");
    setOpenSearchBox(true);
    if (event.target.value === "") {
      setOpenSearchBox(false);
    }
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFilterSearch(searchQuery);
    setFilterSize([]);
    setFilterBrand([]);
    setFilterRating(0);
    setFilterColor("");
    setFilterCategory("");
  };

  const searchData = useSearch();
  return (
    <>
      <div className="offset-widget offset_searchbar p-relative">
        <form
          ref={searchRef}
          onSubmit={handleSearchSubmit}
          className="filter-search-input"
        >
          <input
            value={searchQuery}
            onChange={handleSearchInputChange}
            type="text"
            placeholder="Search Product ..."
          />
          <button>
            <i className="fal fa-search"></i>
          </button>

          <div
            className={`search-result-inner ${openSearchBox
                ? "open_search_box search_wrapper siderbar_search_wrapper"
                : ""
              }`}
          >
            <div className="search-result-l">
              {searchData?.length ? (
                <>
                  {searchData?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="search_product search_sidebar_menu"
                      >
                        <div className="ecomart-common-search-result">
                          <div className="preview_img">
                            <Image src={item?.productImg} alt="img" />
                          </div>
                          <div className="preview_content">
                            <div className="single_product">
                              <Link
                                onClick={() => setSideMenuOpen(!sideMenuOpen)}
                                href={`/shop-details/${item.id}`}
                              >
                                {item.title}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SidebarMenuSearch;
