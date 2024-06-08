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
  const [token, setToken] = useState(null);
  const getUserIP = async () => {
    try {
      const response = await axios.get("https://api.ipify.org?format=json");
      return response.data.ip;
    } catch (error) {
      console.error("Could not retrieve user IP address:", error);
      return null;
    }
  };


  useEffect(() => {
    


  
  }, []);


  const getPanierData = async (userIP:any) => {
    try {
      const authToken = localStorage.getItem("auth_token");
    setToken(authToken);
    
    console.log("tokeennnnnn ", authToken);
      const response = await axios.post(
        "http://localhost:8000/api/getPanierData",
        { user_ip: userIP },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
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

        // Calculate total price
        const total = cartItems.reduce((sum: number, item: any) => {
          return sum + (item.cart_item.quantity * item.product.price);
        }, 0);
        setTotalPrice(total);
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
                {itemsPanier.map((item: any, index: number) => {
                  return (
                    <div key={index} className="sidebar-list-item">
                      <div className="product-image pos-rel">
                        <Link href="/shop-sidebar-5-column" className="">
                          <Image src={item?.product.product_images[0].image_url} alt="img" width={200} height={200} />
                        </Link>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <Link href="/shop-sidebar-5-column"> {item?.product.name} </Link>
                        </div>
                        <div className="product-pricing">
                          <span className="item-number">
                            {item?.cart_item.quantity} &times;
                          </span>
                          <span className="price-now">MAD{(item?.cart_item.quantity * item?.product.price).toFixed(2)}</span>
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
                  MAD{totalPrice ? totalPrice.toFixed(2) : 0}
                </span>
              </div>


              {!token && (
          <div className="sidebar-action-info">
            <p>
              Note: Vous n êtes pas authentifié. Les commandes seront enregistrées avec votre adresse IP.
            </p>
          </div>
        )}


              <div className="sidebar-action-btn">
              {!token && (
         <Link onClick={() => setSideCartOpen(!sideCartOpen)} href="/cart" className="fill-btn">
         Authentifier
       </Link>
        )}
                <Link onClick={() => setSideCartOpen(!sideCartOpen)} href="/checkout" className="border-btn">
                  Commander
                </Link>
              </div>
            </>
          ) : null}
        </div>
      </div>
      <style jsx>{`
        .sidebar-action-info {
          padding: 15px;
          background: #f9f9f9;
          border-radius: 5px;
          margin-bottom: 20px;
        }
        .sidebar-action-info p {
          margin: 0;
          font-size: 14px;
          color: #333;
        }
        .sidebar-action-btn .fill-btn {
          background-color: #333;
          color: #fff;
          padding: 10px 20px;
          margin-right: 10px;
          text-decoration: none;
          border-radius: 5px;
        }
        .sidebar-action-btn .border-btn {
          border: 1px solid #333;
          padding: 10px 20px;
          color: #333;
          text-decoration: none;
          border-radius: 5px;
        }
        .product-image img {
          border-radius: 5px;
        }
        .product-desc {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .product-pricing {
          display: flex;
          justify-content: space-between;
          align-items: center;
          }
          .remove-item {
          background: none;
          border: none;
          color: #ff6f61;
          cursor: pointer;
          }
          .product-name a {
          text-decoration: none;
          color: #333;
          font-weight: 600;
          }
          .sidebar-list-item {
          display: flex;
          padding: 15px 0;
          border-bottom: 1px solid #ddd;
          }
          .sidebar-list-item:last-child {
          border-bottom: none;
          }
          `}</style>
          </>
          );
          };
          
          export default SidebarCard;
