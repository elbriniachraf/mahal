"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CategoryBanner = () => {
  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://elbriniachraf.com/api/categories");
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="category-banner-area pt-30">
      <div className="container">
        <div className="row">
        {categories.slice(0, 5).map((category: any, index: number) => (
            <div
              key={category.id}
              className={`col-xl-4 col-lg-6 col-md-6 ${index === 1 ? "order-xl-3" : ""} ${index === 2 ? "order-xl-2" : ""}`}
            >
              <div className="category-banner-single mb-30 pos-rel">
                <div className="category-banner-img">
                  <Image
                    src={category.image_cloudinary}
                    alt={category.name}
                    width={310}
                    height={300}
                  />
                </div>
                <div className="category-banner-inner">
                  <div className="category-banner-content">
                    <Link href={`/shop-sidebar-5-column/${category.slug}`} className="product-category">
                      {category.name}
                    </Link>
                    <p className="category-short-desc">{category.shortDescription}</p>
                    <Link href={`/shop-sidebar-5-column/${category.slug}`} className="border-btn">
                      Achetez maintenant
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
