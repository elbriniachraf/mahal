"use client";
import { products_data } from "@/data/products-data";
import { getColorClass, getTagClass } from "@/hooks/condition-class";
import useGlobalContext from "@/hooks/use-context";
import { ProductsType, TgroupPackage } from "@/interFace/interFace";
import { cart_group_product, cart_product } from "@/redux/slices/cartSlice";
import { cart_compare_product } from "@/redux/slices/compareSlice";
import { wishlist_product } from "@/redux/slices/wishlistSlice";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
interface propsType {
  item: TgroupPackage;
}
const SingleGroupProductCard = ({ item }: propsType) => {
  const dispatch = useDispatch();
  const groupProducts = item?.groupProducts || [];
  const groupPack: (ProductsType | undefined)[] = [];
  groupProducts.forEach((groupProducts) => {
    const product = products_data?.find(
      (item) => item.id === groupProducts.productId
    );
    groupPack.push(product);
  });
  const totalPrice = groupPack.reduce((acc, item) => {
    if (item && item.price) {
      return acc + item.price;
    }
    return acc;
  }, 0);

  const handleAddToCart = () => {
    dispatch(cart_group_product(groupPack as ProductsType[]));
  };

  return (
    <>
      <div className="single-product">
        <div className="product-image pos-rel">
          <Link href={`/group-product-details/${item.id}`} className="">
            <Image
              style={{ width: "100%", height: "auto" }}
              src={item?.thumbnail}
              alt="img"
            />
          </Link>
          <div className="product-action-bottom">
            <button
              onClick={handleAddToCart}
              type="button"
              className="add-cart-btn"
            >
              <i className="fal fa-shopping-bag"></i>Add to Cart
            </button>
          </div>
        </div>
        <div className="product-desc">
          <div className="product-name">
            <Link href={`/group-product-details/${item.id}`}>
              {" "}
              {item?.title}{" "}
            </Link>
          </div>
          <div className="product-price">
            <span className="price-now">£{totalPrice}.00</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleGroupProductCard;
