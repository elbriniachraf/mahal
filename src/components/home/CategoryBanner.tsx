import React from "react";

import banner1 from "../../../public/assets/img/category_banner/category-banner1.jpg";
import banner4 from "../../../public/assets/img/category_banner/category-banner4.jpg";
import banner2 from "../../../public/assets/img/category_banner/category-banner2.jpg";
import banner3 from "../../../public/assets/img/category_banner/category-banner3.jpg";
import Image from "next/image";
import Link from "next/link";

const CategoryBanner = () => {
  return (
    <>
      <div className="category-banner-area pt-30">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="category-banner-single mb-30 pos-rel">
                <div className="category-banner-img">
                  <Image style={{ width: "100%", height: "auto" }} src={banner1} alt="banner-img" />
                </div>
                <div className="category-banner-inner">
                  <div className="category-banner-content">
                    <Link href="/shop-sidebar-5-column" className="product-category">
                      Man
                    </Link>
                    <p className="category-short-desc">
                      Fashion Collection - 2022
                    </p>
                    <Link href="/shop-sidebar-5-column" className="border-btn">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 order-xl-3">
              <div className="category-banner-single mb-30 pos-rel">
                <div className="category-banner-img">
                  <Image style={{ width: "100%", height: "auto" }} src={banner4} alt="banner-img" />
                </div>
                <div className="category-banner-inner">
                  <div className="category-banner-content">
                    <Link href="/shop-sidebar-5-column" className="product-category">
                      Women
                    </Link>
                    <p className="category-short-desc">
                      Winter Collection - 2022
                    </p>
                    <Link href="/shop-sidebar-5-column" className="border-btn">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 order-xl-2">
              <div className="row">
                <div className="col-xl-12 col-lg-6 col-md-6">
                  <div className="category-banner-single mb-30 pos-rel">
                    <div className="category-banner-img">
                      <Image style={{ width: "100%", height: "auto" }} src={banner2} alt="banner-img" />
                    </div>
                    <div className="category-banner-inner align-items-end">
                      <div className="category-banner-content">
                        <Link href="/shop-sidebar-5-column" className="product-category">
                          Kids Collection
                        </Link>
                        <p className="category-short-desc">Trending - 2022</p>
                        <Link href="/shop-sidebar-5-column" className="border-btn">
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-lg-6 col-md-6">
                  <div className="category-banner-single mb-30 pos-rel">
                    <div className="category-banner-img">
                      <Image style={{ width: "100%", height: "auto" }} src={banner3} alt="banner-img" />
                    </div>
                    <div className="category-banner-inner justify-content-end">
                      <div className="category-banner-content">
                        <Link href="/shop-sidebar-5-column" className="product-category">
                          Cosmetics
                        </Link>
                        <p className="category-short-desc">
                          Fashion Collection - 2022
                        </p>
                        <Link href="/shop-sidebar-5-column" className="border-btn">
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryBanner;
