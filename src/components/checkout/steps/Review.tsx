import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Review = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );
  const totalPrice = cartProducts.reduce(
    (total, product) =>
      total + (product?.price ?? 0) * (product?.totalCart ?? 0),
    0
  );

  return (
    <>
      <section className="cart-area pt-50">
        <div className="address_wrapper d-flex justify-content-between container container-small">
          <div className="address_info">
            <p>Name: Md Tanzil Mia </p>
            <p>Address: ABCD Road, Dhaka</p>
            <p>Email: tanzilmia@gmail.com </p>
          </div>
           
        </div>
        <div className="container container-small">
          {cartProducts?.length ? (
            <>
              <div className="row">
                <div className="col-12">
                  <div className="table-content table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">Images</th>
                          <th className="cart-product-name">Product</th>
                          <th className="product-price">Unit Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-quantity">Size</th>
                          <th className="product-subtotal">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartProducts?.map((item) => {
                          const productPrice =
                            (item.price ?? 0) * (item.totalCart ?? 0);
                          return (
                            <tr key={item?.id}>
                              <td className="product-thumbnail">
                                <Link href="/shop-details">
                                  <Image
                                    width={50}
                                    height={50}
                                    style={{ width: "auto", height: "auto" }}
                                    src={item?.productImg}
                                    alt="img"
                                  />
                                </Link>
                              </td>
                              <td className="product-name">
                                <Link href="/shop-details">
                                  {item?.title}
                                </Link>
                              </td>
                              <td className="product-price">
                                <span className="amount">
                                  ${item?.price}.00
                                </span>
                              </td>

                              <td className="product-price">
                                <span className="amount">
                                  {item?.totalCart}
                                </span>
                              </td>

                              <td className="product-subtotal">
                                <span className="amount">
                                  {item?.sizeArray?.[0]}
                                </span>
                              </td>
                              <td className="product-subtotal">
                                <span className="amount">
                                  ${productPrice}.00
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                        <tr>
                          <td colSpan={4}></td>
                          <td colSpan={1}>Total Amount</td>
                          <td>${totalPrice}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="text-center pt-20">Your Cart Is Empty</p>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Review;
