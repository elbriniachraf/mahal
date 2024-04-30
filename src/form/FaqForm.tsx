"use client"
import React from "react";

const FaqForm = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  return (
    <>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-md-6">
            <div className="single-form-input">
              <input name="name" type="text" placeholder="Your Name" />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-md-6">
            <div className="single-form-input">
              <input name="email" type="email" placeholder="Email Adress" />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-md-6">
            <div className="single-form-input">
              <input name="phone" type="text" placeholder="Phone" />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-md-6">
            <div className="single-form-input">
              <input name="subject" type="text" placeholder="Subject" />
            </div>
          </div>
          <div className="col-xxl-12 col-xl-12 col-md-12">
            <div className="single-form-input">
              <textarea placeholder="Write Massage" name="massage"></textarea>
            </div>
          </div>
          <div className="col-xxl-12 col-xl-12">
            <button type="submit" className="fill-btn">
              Send message
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FaqForm;
