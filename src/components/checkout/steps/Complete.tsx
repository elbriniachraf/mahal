import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import './Complete.css'; // Assurez-vous d'inclure votre fichier CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCheckCircle, faHome, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Complete = ({ orderId }) => {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/getOrder/${orderId}`);
        setOrderDetails(response.data);
      } catch (error) {
        console.error("Error fetching order:", error);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (!orderDetails) {
    return <p>Loading...</p>;
  }

  const { order, shippingAddress, items } = orderDetails;

  return (
    <div className="order-summary text-center">
      <h3 className="thank-you">
        <FontAwesomeIcon icon={faCheckCircle} /> THANK YOU
      </h3>
      <p className="success-message">Payment is successfully processed and your order is on the way</p>
      <p className="transaction-id">Transaction ID: {order.order_key}</p>

      <div className="order-details">
        <h4>Order Details</h4>
        <p>Order Key: {order.order_key}</p>

        <h5><FontAwesomeIcon icon={faMapMarkerAlt} /> Shipping Address</h5>
        <div className="shipping-address">
          {/* <p>{shippingAddress.first_name} {shippingAddress.last_name}</p>
          <p>{shippingAddress.address_1}, {shippingAddress.city}</p>
          <p>{shippingAddress.state}, {shippingAddress.post_code}</p>
          <p>{shippingAddress.phone}</p> */}
        </div>
        
        <h5><FontAwesomeIcon icon={faBoxOpen} /> Items Ordered</h5>
        <ul className="items-list">
          {items.map((item, index) => (
            <li key={index} className="item">
              <p><strong>{item.product.name}</strong></p>
              <p>Quantity: {item.lineItem.quantity}</p>
              <p>Price: {item.product.price} MAD</p>
            </li>
          ))}
        </ul>
      </div>

      <Link className='btn btn-primary' href="/profile">
        <FontAwesomeIcon icon={faHome} /> allez au profile
      </Link>

      <div className="suggestions">
        <h4>Other Products You May Like</h4>
        <div className="suggested-items">
          <div className="suggested-item">
            <p>Product 1</p>
          </div>
          <div className="suggested-item">
            <p>Product 2</p>
          </div>
          <div className="suggested-item">
            <p>Product 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complete;
