"use client";
import React from "react";
const PaymentInfo = () => {
  const paymentInfo = [
    {
      _id: 1,
      totalPrice: 240,
      paymentId:"pi_3Np4EzJEv4PYAsP140TlFuk"
    },
    {
      _id: 2,
      totalPrice: 320,
      paymentId:"pi_9Np4EzJEv4PYAsPsx0TlMtn"
    },
    {
      _id: 3,
      totalPrice: 640,
      paymentId:"pi_6Np4EzJEv4PsdfrtP140qRtb"
    },
    {
      _id: 4,
      totalPrice: 140,
      paymentId:"pi_5Np4EzJEv4PYAsP140TlqdsT"
    },
  ];
  return (
    <>
      {paymentInfo.length ? (
        <>
          {paymentInfo?.map((item) => (
            <div key={item._id} className="student-profile-reviews">
              <div className="student-profile-reviews-item mb-30">
                <div className="student-profile-reviews-course-title d-flex justify-content-between cursore_class">
                  <h5>
                    {" "}
                    Payment Id : <small>
                      {" "}
                       {item.paymentId} {" "}
                    </small>{" "}
                  </h5>
                  <button className="copy-button">
                    <i className={`fa-solid fa-copy`}></i>
                  </button>
                </div>
                <div className="student-profile-reviews-text">
                  <div className="student-profile-review-content">
              
                    <div className="d-flex justify-content-between">
                      <h5>Products List </h5>
                      <h5>Total Price : {item.totalPrice} </h5>
                    </div>
                    <ul className="icon_list  unordered_list_block">
                      <li className="d-flex justify-content-between">
                        <span className="list_item_text">Organic Banana</span>
                        <span className="list_item_text">
                          {" "}
                          Product Id : 9584042583685{" "}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default PaymentInfo;
