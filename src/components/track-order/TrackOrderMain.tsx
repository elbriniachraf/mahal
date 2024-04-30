"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products_data } from "@/data/products-data";
const TrackOrderMain = () => {
  const [searchValue, setSearchValue] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <div className="tracking-search-area">
          <div className="tracking-search-wrapper">
            <div className="form-tracking pt-120 pb-110">
              <form onSubmit={handleSubmit}>
                <div className="d-flex">
                  <div className="form-group box-input">
                    <input
                      className="form-control"
                      type="text"
                      value={searchValue}
                      onChange={handleInputChange}
                      placeholder="Enter Here Your Order Id"
                    />
                  </div>
                  <div className="form-group box-button">
                    <button className="btn btn-buy font-md-bold" type="submit">
                      Tracking Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <>
          <div className="container container-small pt-90 pb-40">
            <div>
              <div className="order-user-info">
                <p className="text-capitalize">
                  {" "}
                  <strong>Name</strong> : Jonathon Smith
                </p>
                <p>
                  {" "}
                  <strong>Order Id</strong> : 54758459635875964
                </p>
                <p>
                  <strong>Order Date</strong> :27 Dec 1.22 PM
                </p>
                <p>
                  <strong>Email</strong> : jhonsmith@gmail.com
                </p>

                <>
                  <p>
                    <strong>Delivered Date</strong> : 2 Jan 1.22 PM
                  </p>
                </>

                <>
                  <p>
                    <strong>Estimate Delivery Date</strong> :29 Dec 1.22 PM
                  </p>
                </>

                <p>
                  <strong>Shiping Address</strong> : Dhaka, Hose 487 , Mirpur 10
                  , Road 6
                </p>
              </div>

              <div className="table-responsive">
                <div>
                  <div className="list-steps">
                    <div className="item-step line-active">
                      <div className="rounded-step">
                        <div className="icon-step step-1 active"></div>
                        <h6 className="mb-1"> Order Placed </h6>
                        <p className="font-md color-gray-500">
                          {" "}
                          27 Dec 1.23 PM
                        </p>
                      </div>
                    </div>
                    <div className="item-step line-active">
                      <div className="rounded-step">
                        <div className="icon-step step-2 active"></div>
                        <h6 className="mb-1"> In Production </h6>
                        <p className="font-md color-gray-500">
                          {" "}
                          18 Feb 9.46 AM
                        </p>
                      </div>
                    </div>
                    <div className="item-step line-active">
                      <div className="rounded-step">
                        <div className="icon-step step-3 active"></div>
                        <h6 className="mb-1"> Shipping </h6>
                        <p className="font-md color-gray-500">
                          {" "}
                          18 Feb 9.46 AM
                        </p>
                      </div>
                    </div>
                    <div className="item-step item-step-complete line-active">
                      <div className="rounded-step">
                        <div className="icon-step step-4 active"></div>
                        <h6 className="mb-1"> Delivered </h6>
                        <p className="font-md color-gray-500">
                          {" "}
                          18 Feb 9.46 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section className="cart-area pt-10 pb-10">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="table-content table-responsive mb-50">
                        <table className="table">
                          <thead>
                            <tr>
                              <th className="product-thumbnail">Images</th>
                              <th className="cart-product-name">Product</th>
                              <th className="product-price">Price</th>
                              <th className="product-quantity">Quantity</th>
                            </tr>
                          </thead>
                          <tbody>
                            {products_data?.slice(0, 3).map((item) => {
                              return (
                                <tr key={item.id}>
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
                                    <span className="amount">$120</span>
                                  </td>
                                  <td className="product-subtotal">
                                    <span className="amount">3</span>
                                  </td>
                                </tr>
                              );
                            })}
                            <tr>
                              <td></td>
                              <td className="product-name">Total Amount</td>

                              <td className="product-subtotal">
                                <span className="amount">$360</span>
                              </td>
                              <td className="product-subtotal">
                                <span className="amount">9</span>
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
      </div>
    </>
  );
};

export default TrackOrderMain;
