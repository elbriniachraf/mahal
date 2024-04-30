"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
 
interface FormData {
  email: string;
  name: string;
  phone: string;
  message: string;
}
 
const QuestionAboutProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const toastId = toast.loading("");
    const email = data.email;
    const name = data.name;
    const phone = data.phone;
    const message = data.message;
    const userInfo = {
      email,
      name,
      phone,
      message,
    };
    toast.success("Question Send Successfully",{ id: toastId, duration: 1000 })
    reset()
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="signup-form-wrapper">
          <div className="signup-wrapper">
            <input
              type="email"
              placeholder="Email or Username"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}
          </div>
          <div className="signup-wrapper">
            <input
              type="text"
              placeholder="Name"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && (
              <span className="error-message">{errors.name.message}</span>
            )}
          </div>
          <div className="signup-wrapper">
            <input
              type="text"
              placeholder="Phone"
              {...register("phone", {
                required: "Phone is required",
              })}
            />
            {errors.phone && (
              <span className="error-message">{errors.phone.message}</span>
            )}
          </div>
          <div className="order-notes">
            <div className="checkout-form-list">
              <textarea
                id="checkout-mess"
                cols={30}
                rows={10}
                placeholder="Write Your Message Here.."
                {...register("message", {
                  required: "Message is required",
                })}
              ></textarea>
              {errors.message && (
                <span className="error-message">{errors.message.message}</span>
              )}
            </div>
          </div>
          <div className="sing-buttom mb-20">
            <button type="submit" className="sing-btn">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default QuestionAboutProduct;
