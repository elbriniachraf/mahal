"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
interface PaymentProps {
  formData: {
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
    panier:any
  },
}

const Payment = ({ formData, setStep,setOrder  }) => {
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
      console.log('response.data');
      console.log(response.data);
      return response.data.cart_items;
    } catch (error) {
      console.error("Could not retrieve cart data:", error);
      return [];
    }
  };




  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const orderData = {
      ...formData,
      paymentMethod: selectPayment,
    };

    try {
      const userIP = await getUserIP();
      if (userIP) {
        const authToken = localStorage.getItem("auth_token");
      
      console.log("tokeennnnnn ", authToken);
        const responses = await axios.post(
          "http://localhost:8000/api/getPanierData",
          { user_ip: userIP },
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        console.log('response.data');
        console.log(responses.data);
        const cartItems=responses.data.cart_items;

        console.log("cartItems");
        console.log(cartItems);
        
        const orderData = {
          ...formData,
          paymentMethod: selectPayment,
          items:cartItems,
          ip:userIP

        };
        const response = await axios.post( `http://localhost:8000/api/createOrder`, orderData, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
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
    // Log the formData to the console
    console.log(formData);

    // Optionally, show an alert with the formData
    alert(`Form Data: ${JSON.stringify(formData, null, 2)}`);
  }, [formData]);


  const [selectPayment, setselectPayment] = useState("stripe");
  return (
    <div className="container payment-container mt-50">
      <form action="#" method="POST" onSubmit={handleFormSubmit}>
        <div className="payment-method">
          <h2 className="mb-4">Select Payment Method</h2>
          <div className="payment-options mb-2">
            <span
              className={selectPayment === "stripe" ? "active_payment" : ""}
              onClick={() => setselectPayment("stripe")}
            >
              Stripe Payment
            </span>
            <span
              className={selectPayment === "cash" ? "active_payment" : ""}
              onClick={() => setselectPayment("cash")}
            >
              Cash On Delivery
            </span>
            <span
              className={selectPayment === "bank" ? "active_payment" : ""}
              onClick={() => setselectPayment("bank")}
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
              <input type="text" id="cardnumber" name="cardnumber" required placeholder="4242-4242-4242"/>
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
              <label htmlFor="cardnumber"> Bank Account Number</label>
              <input type="text" id="cardnumber" name="cardnumber" required placeholder="142587592471"/>
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
