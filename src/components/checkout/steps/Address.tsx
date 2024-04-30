"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
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
}

interface propsType {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const Address = ({ step, setStep }: propsType) => {
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
              <div className="col-lg-12">
                <div className="checkbox-form">
                  <h3>Billing Details</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="country-select">
                        <label>
                          Country <span className="required">*</span>
                        </label>
                        <select>
                          <option value="volvo">USA</option>
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
                          First Name <span className="required">*</span>
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
                          Last Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          {...register("lname", {
                            required: "Last Name is required",
                            minLength: {
                              value: 2,
                              message:
                                "Last Name must be at least 2 characters",
                            },
                            maxLength: {
                              value: 50,
                              message: "Last Name cannot exceed 50 characters",
                            },
                          })}
                        />
                        {errors.lname && (
                          <span className="error-message">
                            {errors.lname.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>Company Name</label>
                        <input
                          type="text"
                          placeholder=""
                          {...register("companyName", {
                            minLength: {
                              value: 2,
                              message: "Name must be at least 2 characters",
                            },
                            maxLength: {
                              value: 50,
                              message: "Name cannot exceed 50 characters",
                            },
                          })}
                        />
                        {errors.companyName && (
                          <span className="error-message">
                            {errors.companyName.message}
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
                          Town / City <span className="required">*</span>
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
                          State <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          {...register("state", {
                            required: "State is required",
                            minLength: {
                              value: 2,
                              message: "State must be at least 2 characters",
                            },
                            maxLength: {
                              value: 50,
                              message: "State cannot exceed 50 characters",
                            },
                          })}
                        />
                        {errors.state && (
                          <span className="error-message">
                            {errors.state.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Postcode / Zip <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Postcode / Zip"
                          {...register("postCode", {
                            required: "postCode is required",
                            minLength: {
                              value: 2,
                              message: "postCode must be at least 3 characters",
                            },
                            maxLength: {
                              value: 50,
                              message: "postCode cannot exceed 15 characters",
                            },
                          })}
                        />
                        {errors.postCode && (
                          <span className="error-message">
                            {errors.postCode.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Email Address <span className="required">*</span>
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
                          <label>Order Notes</label>
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
