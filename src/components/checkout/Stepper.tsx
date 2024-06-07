"use client";
import React, { useState } from "react";
import Address from "./steps/Address";
import Review from "./steps/Review";
import Payment from "./steps/Payment";
import Complete from "./steps/Complete";

const Stepper = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    companyName: "",
    address: "",
    city: "",
    state: "",
    postCode: "",
    email: "",
    phone: "",
    notes: "",
    hasPassword: false,
    password: "",
    panier:{},
  });

  const [order, setOrder] = useState<number>(-1);
  
  const [step, setStep] = useState<number>(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="card border-0 shadow">
            <div className="card-body custom_padding">
              <div className="rows">
                <div className="checkout-list-steps">
                  <div
                    className={`item-step ${step >= 1 ? "line-active" : ""}`}
                  >
                    <div className="rounded-step">
                      <div
                        className={`icon-step step-1 ${
                          step >= 1 ? "active" : ""
                        }`}
                      ></div>
                      <h6 className="mb-1"> Address </h6>
                    </div>
                  </div>
                  {/* <div
                    className={`item-step ${step >= 2 ? "line-active" : ""}`}
                  >
                    <div className="rounded-step">
                      <div
                        className={`icon-step step-2 ${
                          step >= 2 ? "active" : ""
                        }`}
                      ></div>
                      <h6 className="mb-1"> Review </h6>
                    </div>
                  </div> */}
                  <div
                    className={`item-step ${step >= 3 ? "line-active" : ""}`}
                  >
                    <div className="rounded-step">
                      <div
                        className={`icon-step step-3 ${
                          step >= 3 ? "active" : ""
                        }`}
                      ></div>
                      <h6 className="mb-1"> Payment </h6>
                    </div>
                  </div>
                  <div
                    className={`item-step item-step-complete ${step === 4 ? "line-active" : ""}`}
                  >
                    <div className="rounded-step">
                      <div
                        className={`icon-step step-4 ${
                          step === 4 ? "active" : ""
                        }`}
                      ></div>
                      <h6 className="mb-1"> Complete </h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                {step === 1 && (
                  <>
                    {" "}
                    <Address formData={formData} setFormData={setFormData} setStep={setStep} />{" "}
                  </>
                )}
                {/* {step === 2 && (
                  <>
                    {" "}
                    <Review />{" "}
                  </>
                )} */}
                {step === 2 && (
                  <>
                    {" "}
                    <Payment formData={formData} setStep={setStep} setOrder={setOrder} />{" "}
                  </>
                )}
                {step === 3 && (
                  <>
                    {" "}
                    <Complete orderId={order.id} />{" "}{" "}
                  </>
                )}
              </div>

              <div className="row pt-20 justify-content-between">
                <div className="col-lg-4">
                  {step > 1 && (
                    <button className="btn btn-dark mr-3" onClick={prevStep}>
                      Previous
                    </button>
                  )}
                </div>
                <div className="col-lg-4 text-end">
                  {step < 4 && step > 1 &&(
                    <button className="btn btn-dark" onClick={nextStep}>
                      Next
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
