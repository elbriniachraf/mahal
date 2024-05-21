"use client";
import useGlobalContext from "@/hooks/use-context";
import { remove_cart_product } from "@/redux/slices/cartSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const SidebarCard = () => {
  const { sideCartOpen, setSideCartOpen } = useGlobalContext();
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0);
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );
  const [itemsPanier, setItemsPanier] = useState([]);



  const getUserIP = async () => {
    try {
      const response = await axios.get("https://api.ipify.org?format=json");
      return response.data.ip;
    } catch (error) {
      console.error("Could not retrieve user IP address:", error);
      return null;
    }
  };

  const getPanierData = async (userIP:any) => {
    try {
      const response = await axios.post("https://elbriniachraf.com/api/getPanierData", { user_ip: userIP });
      return response.data.cart_items;
    } catch (error) {
      console.error("Could not retrieve cart data:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchCartData = async () => {
      const userIP = await getUserIP();
      if (userIP) {
        const cartItems = await getPanierData(userIP);
        setItemsPanier(cartItems);
        
      }
    };

    fetchCartData();
  }, [dispatch]);

  
  return (
    <>
      <div className="fix">
        <div
          className={`sidebar-action sidebar-cart ${
            sideCartOpen ? "cart-open" : ""
          }`}
        >
          <button
            onClick={() => setSideCartOpen(!sideCartOpen)}
            className="close-sidebar"
          >
            Close<i className="fal fa-times"></i>
          </button>
          <h4 className="sidebar-action-title">Panier d achat</h4>
          <div className="sidebar-action-list">
            {itemsPanier.length ? (
              <>
                {itemsPanier.map((item:any, index:number) => {
                  const productPrice =
                    (item.price ?? 0) * (item.quantity ?? 0);
                  return (
                    <div key={index} className="sidebar-list-item">
                      <div className="product-image pos-rel">
                        <Link href="/shop-sidebar-5-column" className="">
                          <Image src={item?.product[0].product_images[0].image_url} alt="img"  width={200} height={200}/>
                        </Link>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <Link href="/shop-sidebar-5-column"> {item?.product[0].name} </Link>
                        </div>
                        <div className="product-pricing">
                          <span className="item-number">
                            {item?.cart_item.quantity} &times;
                          </span>
                          <span className="price-now">${(item?.cart_item.quantity * item?.product[0].price).toFixed(2)}</span>

                        </div>
                        <button
                          onClick={() => dispatch(remove_cart_product(item))}
                          className="remove-item"
                        >
                          <i className="fal fa-times"></i>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <p className="text-center pt-20">Votre panier est vide</p>
            )}
          </div>
          {itemsPanier.length ? (
            <>
              <div className="product-price-total">
                <span>Sous-total :</span>
                <span className="subtotal-price">
                  ${totalPrice ? totalPrice : 0}.00
                </span>
              </div>
              <div className="sidebar-action-btn">
                <Link onClick={() => setSideCartOpen(!sideCartOpen)} href="/cart" className="fill-btn">
                  Authentitfier
                </Link>
                <Link onClick={() => setSideCartOpen(!sideCartOpen)} href="/checkout" className="border-btn">
                  Commander
                </Link>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default SidebarCard;
