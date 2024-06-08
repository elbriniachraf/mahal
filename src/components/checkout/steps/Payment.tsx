"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

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
  hasPassword: boolean;
  password: string;
  panier: any;
}

interface PaymentProps {
  formData: FormData;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setOrder: React.Dispatch<React.SetStateAction<any>>;
}

const Payment: React.FC<PaymentProps> = ({ formData, setStep, setOrder }) => {
  const [selectPayment, setSelectPayment] = useState<string>("stripe");

  const getUserIP = async (): Promise<string | null> => {
    try {
      const response = await axios.get("https://api.ipify.org?format=json");
      return response.data.ip;
    } catch (error) {
      console.error("Could not retrieve user IP address:", error);
      return null;
    }
  };

  const getPanierData = async (userIP: string | null): Promise<any[]> => {
    if (!userIP) return [];
    try {
      const authToken = localStorage.getItem("auth_token");
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

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const userIP = await getUserIP();
      if (userIP) {
        const cartItems = await getPanierData(userIP);
        const orderData = {
          ...formData,
          paymentMethod: selectPayment,
          items: cartItems,
          ip: userIP,
        };
        const authToken = localStorage.getItem("auth_token");
        const response = await axios.post(
          "http://localhost:8000/api/createOrder",
          orderData,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        if (response.status === 200) {
          setOrder(response.data.order);
          setStep(3); // Move to the next step
        } else {
          setOrder(response.data.order);
          setStep(3); // Move to the next step
        }
      }
    } catch (error) {
      console.error('Error creating order:', error);
      alert('An error occurred while creating the order.');
    }
  };

  useEffect(() => {
    console.log(formData);
    alert(`Form Data: ${JSON.stringify(formData, null, 2)}`);
  }, [formData]);

  return (
    <div className="container payment-container mt-50">
      <form onSubmit={handleFormSubmit}>
        <div className="payment-method">
          <h2 className="mb-4">Select Payment Method</h2>
          <div className="payment-options mb-2">
            <span
              className={selectPayment === "stripe" ? "active_payment" : ""}
              onClick={() => setSelectPayment("stripe")}
            >
              Stripe Payment
            </span>
            <span
              className={selectPayment === "cash" ? "active_payment" : ""}
              onClick={() => setSelectPayment("cash")}
            >
              Cash On Delivery
            </span>
            <span
              className={selectPayment === "bank" ? "active_payment" : ""}
              onClick={() => setSelectPayment("bank")}
            >
              Bank Transfer
            </span>
          </div>
        </div>

        {selectPayment === "stripe" && (
          <>
            <div className="payment-details">
              <h2>Payment Details</h2>
              <label htmlFor="cardnumber">Card Number</label>
              <input type="text" id="cardnumber" name="cardnumber" required placeholder="4242-4242-4242-4242" />
            </div>
            <button className="payment_btn" type="submit">
              Submit Payment
            </button>
          </>
        )}
        {selectPayment === "cash" && (
          <>
            <button className="payment_btn" type="submit">
              Submit Payment
            </button>
          </>
        )}
        {selectPayment === "bank" && (
          <>
            <div className="payment-details">
              <h2>Payment Details</h2>
              <label htmlFor="cardnumber">Bank Account Number</label>
              <input type="text" id="cardnumber" name="cardnumber" required placeholder="1425-8759-2471" />
            </div>
            <button className="payment_btn" type="submit">
              Submit Payment
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Payment;
