"use client";

import { products_data } from "@/data/products-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DefaultDashboard = () => {
  return (
    <>
      <div className="table-responsive">
        <div>
          <p>
            {" "}
            <strong>Order Id</strong> : 125426368579
          </p>
          <p>
            <strong>Order Date</strong> : 27 Feb 2024
          </p>
          <p>
            <strong>Delivere Date</strong> : 27 Feb 2024
          </p>

          <section className="cart-area pt-10 pb-10">
            <div className="container container-small">
              <div className="row">
                <div className="col-12">
                  <div className="table-content table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">Images</th>
                          <th className="cart-product-name">Product</th>
                          <th className="product-price">Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-quantity">Track Order</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products_data?.slice(0, 2)?.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td className="product-thumbnail">
                                <Link href={`/shop-details/${item?.id}`}>
                                  <Image
                                    src={item?.productImg}
                                    width={50}
                                    height={50}
                                    style={{
                                      width: "auto",
                                      height: "auto",
                                    }}
                                    alt=""
                                  />
                                </Link>
                              </td>
                              <td className="product-name">
                                <Link href={`/shop-details/${item?.id}`}>
                                  {item?.title}
                                </Link>
                              </td>

                              <td className="product-subtotal">
                                <span className="amount">${item?.price}</span>
                              </td>
                              <td className="product-subtotal">
                                <span className="amount">5</span>
                              </td>
                              <td className="product-subtotal">
                                <div className="bd-banner__btn">
                                  <button
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Quick View"
                                    data-bs-toggle="modal"
                                    data-bs-target="#orderTrackModal"
                                    className="btn_back"
                                  >
                                    View Order Status
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                        <tr>
                          <td></td>
                          <td className="product-name">Total Amount</td>

                          <td className="product-subtotal">
                            <span className="amount">$520</span>
                          </td>
                          <td className="product-subtotal">
                            <span className="amount">11</span>
                          </td>
                          <td  className="product-subtotal">
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default DefaultDashboard;
