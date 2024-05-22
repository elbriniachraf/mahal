"use client";
import useGlobalContext from "@/hooks/use-context";
import { RootState } from "@/redux/store";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
interface FormData {
  fname: string;
  lname: string;
  companyName: string;
  address: string;
  city: string;
  state: string;
  postCode: string;
  email: string;
  phone: string;
  notes: string;
  hasPassword: boolean; // Ajout de la propriété pour la case à cocher
  password: string; // Ajout du champ de mot de passe
}

interface propsType {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const Address = ({ step, setStep }: propsType) => {
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
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    setStep(step + 1);
    reset();
  };
  return (
    <>
      <section className="checkout-area pt-40">
        <div className="container container-small">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-lg-12 d-flex d-flex justify-content-between " style={{gap:"4%"}}>
                <div className="checkbox-form col-md-6 ">
                  <h3>Détails de facturation</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="country-select">
                        <label>
                          Pays <span className="required">*</span>
                        </label>
                        <select disabled>
                          <option value="volvo" selected={true}>Maroc</option>
                          <option value="saab">Algeria</option>
                          <option value="mercedes">Afghanistan</option>
                          <option value="audi">Ghana</option>
                          <option value="audi2">Albania</option>
                          <option value="audi3">Bahrain</option>
                          <option value="audi4">Colombia</option>
                          <option value="audi5">Dominican Republic</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Nom Complet <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          {...register("fname", {
                            required: "First Name is required",
                            minLength: {
                              value: 2,
                              message:
                                "First Name must be at least 2 characters",
                            },
                            maxLength: {
                              value: 50,
                              message: "First Name cannot exceed 50 characters",
                            },
                          })}
                        />
                        {errors.fname && (
                          <span className="error-message">
                            {errors.fname.message}
                          </span>
                        )}
                      </div>
                    </div>
                   
                 
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Address <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Street address"
                          {...register("address", {
                            required: "Address is required",
                            minLength: {
                              value: 2,
                              message: "Address must be at least 2 characters",
                            },
                            maxLength: {
                              value: 50,
                              message: "Address cannot exceed 30 characters",
                            },
                          })}
                        />
                        {errors.address && (
                          <span className="error-message">
                            {errors.address.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          ville <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Town / City"
                          {...register("city", {
                            required: "City is required",
                            minLength: {
                              value: 2,
                              message: "City must be at least 3 characters",
                            },
                            maxLength: {
                              value: 50,
                              message: "City cannot exceed 50 characters",
                            },
                          })}
                        />
                        {errors.city && (
                          <span className="error-message">
                            {errors.city.message}
                          </span>
                        )}
                      </div>
                    </div>
                   
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Email  <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder=""
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                        />
                        {errors.email && (
                          <span className="error-message">
                            {errors.email.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Phone <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Phone Number"
                          {...register("phone", {
                            required: "Phone is required",
                            minLength: {
                              value: 2,
                              message:
                                "Phone Number must be at least 7 characters",
                            },
                            maxLength: {
                              value: 50,
                              message:
                                "Phone Number cannot exceed 15 characters",
                            },
                          })}
                        />
                        {errors.phone && (
                          <span className="error-message">
                            {errors.phone.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="order-notes">
                        <div className="checkout-form-list">
                          <label>Remarques</label>
                          <textarea
                            id="checkout-mess"
                            cols={30}
                            rows={10}
                            placeholder="Notes about your order, e.g. special notes for delivery."
                            {...register("notes", {
                              minLength: {
                                value: 2,
                                message: "Name must be at least 2 characters",
                              },
                              maxLength: {
                                value: 50,
                                message: "Name cannot exceed 50 characters",
                              },
                            })}
                          ></textarea>
                          {errors.notes && (
                            <span className="error-message">
                              {errors.notes.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
              <div className="order-notes">
                <div className="checkout-form-list">
                
                  <label>
                  <input
                      type="checkbox"
                      {...register("hasPassword")}
                      onChange={(e) => setShowPassword(e.target.checked)}
                    />
                    &nbsp;
                    Creez un compte
                    
                  </label>
                </div>
              </div>
            </div>
            {/* Affichage du champ de mot de passe si la case à cocher est cochée */}
            {showPassword && (
              <div className="col-md-6">
                <div className="checkout-form-list">
                  <label>
                    Password <span className="required">*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required"
                    })}
                  />
                  {errors.password && (
                    <span className="error-message">{errors.password.message}</span>
                  )}
                </div>
              </div>
            )}
                  </div>
                </div>
                <div className="col-md-6">
                <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="card-title">Panier d'achat</h5>
          <button
            
            className="btn-close"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="card-body">
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
                </div>

                
              </div>
            </div>
            <div className="row mt-5 justify-content-end">
              <div className="col-lg-12 text-end">
                {step < 4 && (
                  <button type="submit" className="btn btn-dark">
                    Next
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Address;
