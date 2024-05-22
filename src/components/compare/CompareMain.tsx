"use client";
import React, {
  ChangeEvent,
  FormEvent,
  useState,
  useEffect,
  useRef,
} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/bundle";
import CompareSingleCard from "./CompareSingleCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SidebarMain from "../SharedComponents/Sidebars/SidebarMain";
import useGlobalContext from "@/hooks/use-context";
import { useSearch } from "@/hooks/useSearch";
import { ProductsType } from "@/interFace/interFace";
import { cart_compare_product } from "@/redux/slices/compareSlice";
import { useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import BreadCrumb from "../SharedComponents/BreadCrumb";

const CompareMain = () => {
  const [openSearchBox, setOpenSearchBox] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const searchRef = useRef(null);
  const dispatch = useDispatch();

  const {
    setFilterBrand,
    setFilterSize,
    setFilterRating,
    setFilterSearch,
    setFilterColor,
    setFilterCategory,
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

  const cartProducts = useSelector(
    (state: RootState) => state.compare.cartProducts
  );

  const searchData = useSearch();

  const handleAddToCompare = (item: ProductsType) => {
    setSearchQuery("");
    setOpenSearchBox(false);
    dispatch(cart_compare_product(item));
  };

  return (
    <>
    <BreadCrumb title="Compare Products" />
      <section className="compare-section section-b-space ratio_asos mt-80 mb-80">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 col-lg-8 order-2 col-xl-9 col-xxl-10 order-lg-1">
              {cartProducts?.length ? (
                <>
                  <div className="slide-4 no-arrow">
                    <Swiper
                      modules={[Autoplay]}
                      loop={true}
                      breakpoints={{
                        320: {
                          slidesPerView: 1,
                        },
                        550: {
                          slidesPerView: 2,
                          spaceBetween: 5,
                        },
                        767: {
                          slidesPerView: 2,
                          spaceBetween: 5,
                        },
                        992: {
                          slidesPerView: 3,
                          spaceBetween: 5,
                        },
                        1200: {
                          slidesPerView: 4,
                          spaceBetween: 5,
                        },
                        1400: {
                          slidesPerView: 4,
                          spaceBetween: 5,
                        },
                      }}
                    >
                      <div className="row">
                        {cartProducts?.map((item, index) => (
                          <SwiperSlide key={index}>
                            <CompareSingleCard item={item} />
                          </SwiperSlide>
                        ))}
                      </div>
                    </Swiper>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-center">No Product For Compare</p>
                </>
              )}
            </div>
            <div className="col-md-4 col-sm-12 col-lg-4 order-1 col-xl-3 col-xxl-2 order-lg-2">
              <div className="compare_search">
                <div
                  className="filter-widget-content p-relative"
                  ref={searchRef}
                >
                  <div className="filter-widget-search">
                    <form onSubmit={handleSearchSubmit}>
                      <input
                        type="text"
                        placeholder="Search Compare Product ..."
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                      />
                      <button type="submit">
                        <i className="fal fa-search"></i>
                      </button>
                    </form>
                  </div>
                  <div
                    className={`search-result-inner ${
                      openSearchBox ? "open_search_box" : ""
                    }`}
                  >
                    <div className="search-result-l">
                      {searchData?.length ? (
                        <>
                          {searchData?.map((item, index) => {
                            return (
                              <div
                                key={index}
                                onClick={() => handleAddToCompare(item)}
                                className="search_product"
                              >
                                <div className="ecomart-compare-search-item">
                                    <div className="compare_preview_img">
                                      <Image src={item?.productImg} alt="img" />
                                    </div>
                                    <div className="single_product_compare">
                                      <button>{item.title}</button>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SidebarMain vendorId="-1"/>
    </>
  );
};

export default CompareMain;
