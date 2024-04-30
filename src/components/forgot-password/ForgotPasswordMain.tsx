import React from "react";
import BreadCrumb from "../SharedComponents/BreadCrumb";
import ForgotPasswordForm from "@/form/ForgotPasswordForm";

const ForgotPasswordMain = () => {
  return (
    <>
      <BreadCrumb title="Forgot Password" />
      <section className="login__area pt-110 pb-110">
        <div className="container">
          <div className="login__inner p-relative z-index-1">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8 col-md-10">
                <div className="login__wrapper">
                  <div className="login__top mb-30 text-center">
                    <h3 className="login__title">
                      Enter Your Email
                    </h3>
                    <p>Check Your Email , We Send You A Verification <br/>Code For Reset Your Password.</p>
                  </div>
                  <ForgotPasswordForm
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPasswordMain;
