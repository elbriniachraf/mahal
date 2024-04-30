"use client";
import React  from "react";
import Image from "next/image";
import Link from "next/link";
import { products_data } from "@/data/products-data";
const CancelOrderTrack = () => {

  return (
    <>
      {products_data?.length ? (
        <>
          <div className="table-responsive">
            {products_data?.slice(0,2)?.map((item) => (
              <>
                <div key={item?.id}>
                  <div className="ml-15">
                  <p> <strong>Order Id</strong> :  021542145485274 </p>
                  <p>
                    <strong>Order Date</strong> : 17 Jan 2024
                  </p>
                  </div>

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

                                  <th className="product-quantity">Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="product-thumbnail">
                                    <Link href="">
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
                                    <Link href="">
                                      {item?.title}
                                    </Link>
                                  </td>

                                  <td className="product-subtotal">
                                    <span className="amount">
                                      ${item?.price}
                                    </span>
                                  </td>
                                  <td className="product-subtotal">
                                    <span className="amount">
                                       5
                                    </span>
                                  </td>
                                  <td className="product-subtotal">
                                    <span className="amount">
                                    Cancel Pending
                                    </span>
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
              </>
            ))}
          </div>
        </>
      ) : (
        <>
          <p className="text-center">No cancelled Product </p>
        </>
      )}
    </>
  );
};

export default CancelOrderTrack;
