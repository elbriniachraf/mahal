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
                <Image
  src="https://mahalat.ma/wp-content/uploads/2023/12/gros-plan-portrait-belle-fille.jpg"
  alt="banner-img"
  width={510} // Replace yourWidth with the actual width of the image
  height={300} // Replace yourHeight with the actual height of the image
/>

                </div>
                <div className="category-banner-inner">
                  <div className="category-banner-content">
                    <Link href="/shop-sidebar-5-column" className="product-category">
                      Mode Pour Elle
                    </Link>
                    <p className="category-short-desc">
                      Mahalat
                    </p>
                    <Link href="/shop-sidebar-5-column" className="border-btn">
                      Achetez maintenant
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 order-xl-3">
              <div className="category-banner-single mb-30 pos-rel">
                <div className="category-banner-img">
                <Image
  src="https://mahalat.ma/wp-content/uploads/2023/12/portrait-bebe-nouveau-ne-balancoire.jpg"
  alt="banner-img"
  width={510} // Replace yourWidth with the actual width of the image
  height={300} // Replace yourHeight with the actual height of the image
/>
                </div>
                <div className="category-banner-inner">
                  <div className="category-banner-content">
                    <Link href="/shop-sidebar-5-column" className="product-category">
                      Kids
                    </Link>
                    <p className="category-short-desc">
                    Mahalat
                    </p>
                    <Link href="/shop-sidebar-5-column" className="border-btn">
                      Achetez maintenant
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
                    <Image
  src="https://mahalat.ma/wp-content/uploads/2023/12/concept-menuiserie-metier-bricoleur.jpg"
  alt="banner-img"
  width={510} // Replace yourWidth with the actual width of the image
  height={300} // Replace yourHeight with the actual height of the image
/>
                    </div>
                    <div className="category-banner-inner align-items-end">
                      <div className="category-banner-content">
                        <Link href="/shop-sidebar-5-column" className="product-category">
                         Material pro
                        </Link>
                        <p className="category-short-desc">Mahalat</p>
                        <Link href="/shop-sidebar-5-column" className="border-btn">
                          Achetez maintenant
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-lg-6 col-md-6">
                  <div className="category-banner-single mb-30 pos-rel">
                    <div className="category-banner-img">
                    <Image
  src="https://mahalat.ma/wp-content/uploads/2024/01/disposition-compte-gouttes-produits-pour-peau.jpg"
  alt="banner-img"
  width={510} // Replace yourWidth with the actual width of the image
  height={300} // Replace yourHeight with the actual height of the image
/>
                    </div>
                    <div className="category-banner-inner justify-content-end">
                      <div className="category-banner-content">
                        <Link href="/shop-sidebar-5-column" className="product-category">
                        Cosmétique
                        </Link>
                        <p className="category-short-desc">
                        Mahalat
                        </p>
                        <Link href="/shop-sidebar-5-column" className="border-btn">
                          Achetez maintenant
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
