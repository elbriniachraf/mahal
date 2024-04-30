"use client";
import React from "react";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
 
import { products_data } from "@/data/products-data";
import { ProductsType } from "@/interFace/interFace";
import GetRating from "@/hooks/GetRatting";
import { group_Package_Data } from "@/data/group-pacakge-data";
import { useDispatch } from "react-redux";
import { cart_group_product } from "@/redux/slices/cartSlice";

const BundleComboArea = () => {
  const dispatch = useDispatch(); 
  const comboPackgeData = group_Package_Data?.slice(0, 1);
  const [firstComboPackage] = comboPackgeData || [];
  const groupProducts = firstComboPackage?.groupProducts || [];

  // Initialize an array to store the found products
  const groupPack: (ProductsType | undefined)[] = [];

  groupProducts.forEach((groupProducts) => {
    const product = products_data?.find(
      (item) => item.id === groupProducts.productId
    );
    groupPack.push(product);
  });

  // Destructure the groupPack array to get groupItemOne, groupItemTwo, and groupItemThree
  const [groupItemOne, groupItemTwo, groupItemThree] = groupPack;
 
   

  const totalPrice = groupPack.reduce((acc, item) => {
    if (item && item.price) {
        return acc + item.price;
    }
    return acc;
}, 0);

 
const handleAddToCart = () =>{
  dispatch(cart_group_product(groupPack as ProductsType[]))
}



  return (
    <>
      <section className="bunle-pack-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center">
                <h2 className="section-main-title mb-50">Bundle Group Pack</h2>
              </div>
            </div>
          </div>
          <div className="bundle-pack-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="pack-items-wrapper">
                  <div className="pack-items-inner">
                    <div className="pack-items">
                      {groupPack?.map((item) => (
                        <div key={item?.id} className="pack-item-single">
                          <div className="product-image pos-rel">
                            <Link href={`/shop-details/${item?.id}`} className="">
                              <Image
                                style={{ width: "100%", height: "auto" }}
                                src={item?.productImg as StaticImageData}
                                alt="procuct img"
                              />
                            </Link>
                          </div>
                          <div className="product-desc">
                            <div className="product-name">
                              <Link href={`/shop-details/${item?.id}`}>
                                {item?.title}
                              </Link>
                            </div>
                            <div className="product-price">
                              <span className="price-now">£{item?.price}.00</span>
                            </div>
                            <div className="product-rating">
                             <GetRating averageRating={item?.rating as number}/>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="pack-price-btn">
                        <div className="pack-total-price">£{totalPrice}.00</div>
                        <button onClick={handleAddToCart} className="add-cart-btn">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="product-package-photo pos-rel">
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    src={firstComboPackage.thumbnail}
                    alt="procuct img"
                  />
                  <div className="product-image-nav">
                    <div className="product-nav-item animate-play pack-1-1">
                      <i className="fal fa-plus"></i>
                      <div className="pack-item-single hover-content">
                        <div className="product-image pos-rel">
                          <Link href="/shop-sidebar-5-column" className="">
                            <Image
                              style={{ width: "100%", height: "auto" }}
                              src={groupItemOne?.productImg as StaticImageData}
                              alt="procuct img"
                            />
                          </Link>
                        </div>
                        <div className="product-desc">
                          <div className="product-name">
                            <Link href="/shop-sidebar-5-column">
                            {groupItemOne?.title}
                            </Link>
                          </div>
                          <div className="product-price">
                            <span className="price-now">£{groupItemOne?.price}.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-nav-item animate-play pack-1-2">
                      <i className="fal fa-plus"></i>
                      <div className="pack-item-single hover-content">
                        <div className="product-image pos-rel">
                          <Link href="/shop-sidebar-5-column" className="">
                            <Image
                              style={{ width: "100%", height: "auto" }}
                              src={groupItemTwo?.productImg as StaticImageData}
                              alt="procuct img"
                            />
                          </Link>
                        </div>
                        <div className="product-desc">
                          <div className="product-name">
                            <Link href="/shop-sidebar-5-column">
                            {groupItemTwo?.title}
                            </Link>
                          </div>
                          <div className="product-price">
                            <span className="price-now">£{groupItemTwo?.price}.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-nav-item animate-play pack-1-3">
                      <i className="fal fa-plus"></i>
                      <div className="pack-item-single hover-content">
                        <div className="product-image pos-rel">
                          <Link href="/shop-sidebar-5-column" className="">
                            <Image
                              style={{ width: "100%", height: "auto" }}
                              src={groupItemThree?.productImg as StaticImageData}
                              alt="procuct img"
                            />
                          </Link>
                        </div>
                        <div className="product-desc">
                          <div className="product-name">
                            <Link href="/shop-sidebar-5-column">
                              {groupItemThree?.title}
                            </Link>
                          </div>
                          <div className="product-price">
                            <span className="price-now">£{groupItemThree?.price}.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BundleComboArea;
