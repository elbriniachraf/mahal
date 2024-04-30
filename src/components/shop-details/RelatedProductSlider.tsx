"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/bundle";
import { products_data } from "@/data/products-data";
import SingleProductCard from "../SharedComponents/SingleProductCard";
import { ProductsType, idType } from "@/interFace/interFace";
const RelatedProductSlider = ({id}:idType) => {
  const item = products_data?.find((itm) => itm?.id == id) as ProductsType;
  const mapData = products_data?.filter((itm)=> itm?.category === item?.category)
  return (
    <>
       {
        mapData?.length ?
        <>
        <div className="related_product pb-70">
        <div className="container container-small">
          <div className="section-title mb-55">
            <h2>Related Product</h2>
          </div>

          <div className="r-product-active">
            <Swiper
              modules={[Autoplay]}
             
              autoplay={{
                delay: 3000,
              }}
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                550: {
                  slidesPerView: 2,
                },
                767: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
                1400: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
            >
              {mapData?.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <SingleProductCard item={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>

        
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
        </div>
      </div>
        </>
        :
        <>
          <h3>No Related Product Found</h3>
        </>
       }
    </>
  );
};

export default RelatedProductSlider;
