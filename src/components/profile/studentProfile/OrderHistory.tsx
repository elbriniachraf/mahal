"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const OrderHistory = () => {


  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("auth_token")
      console.log("tokeennnnnn ",token);
      
    if (token) {
      axios
        .post(
          "http://localhost:8000/api/userDetails", 
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          setUserDetails(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading account details: {error.message}</p>;
  return (
    <>
      <div className="table-responsive">
        {userDetails.orders.map((order, orderIndex) => (
          <div key={orderIndex}>
            <p><strong>Order Id</strong> : {order.id}</p>
            <p><strong>Order Date</strong> : {new Date(order.date_created).toLocaleDateString()}</p>
            <p><strong>Status</strong> : {order.date_completed ? new Date(order.date_completed).toLocaleDateString() : "Pending"}</p>

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
                          {order.order_line_items.map((item, itemIndex) => (
                            <tr key={itemIndex}>
                              <td className="product-thumbnail">
                                <Link href={`/shop-details/${item.product_id}`}>
                                  <Image
                                    src={item.product_images[0].image_url || "/default-image.jpg"}
                                    width={50}
                                    height={50}
                                    style={{
                                      width: "auto",
                                      height: "auto",
                                    }}
                                    alt={item.product.name}
                                  />
                                </Link>
                              </td>
                              <td className="product-name">
                                <Link href={`/shop-details/${item.product_id}`}>
                                  {item.name}
                                </Link>
                              </td>
                              <td className="product-subtotal">
                                <span className="amount">{item.price} MAD</span>
                              </td>
                              <td className="product-subtotal">
                                <span className="amount">{item.quantity}</span>
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
                                    Suivre l ordre
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                          <tr>
                            <td></td>
                            <td className="product-name"><strong>Total Amount</strong></td>
                            <td className="product-subtotal"><span className="amount">{order.total} MAD</span></td>
                            <td className="product-subtotal"><span className="amount">{order.order_line_items.reduce((acc, item) => acc + item.quantity, 0)}</span></td>
                            <td className="product-subtotal"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>
    </>
  );
};

export default OrderHistory;
