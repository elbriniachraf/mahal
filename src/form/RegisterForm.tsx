"use client";

import NiceSelectTwo from "@/components/common/NiceSelectTwo";
import { GenderData } from "@/data/nice-select-data";
import useGlobalContext from "@/hooks/use-context";
import FacebookIcon from "@/svg/FacebookIcon";
import GoogleIcon from "@/svg/GoogleIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
interface FormData {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  password: string;
  gender: string;
}

const RegisterForm = () => {
  const router = useRouter()
  const { niceSelectData } = useGlobalContext();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const toastId = toast.loading("");
    const fname = data.fname;
    const lname = data.lname;
    const email = data.email;
    const phone = data.phone;
    const password = data.password;
    const gender = niceSelectData;
    const userInfo = {
      fname,
      lname,
      email,
      phone,
      password,
      gender,
    };
    reset(),
    router.push("/login")
    toast.success("Register Successfully",{ id: toastId, duration: 1000 })
  };

  const selectHandler = () => {};
  return (
    <>
      <div className="register-area pt-120 pb-120">
        <div className="container container-small">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="signup-form-wrapper">
                {/* form */}

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="signup-wrapper">
                        <input
                          type="text"
                          placeholder="First Name"
                          {...register("fname", {
                            required: "First Name is required",
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
                      <div className="signup-wrapper">
                        <input
                          type="text"
                          placeholder="Last Name"
                          {...register("lname", {
                            required: "Last Name is required",
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
                      <div className="signup-wrapper">
                        <input
                          type="email"
                          placeholder="Email"
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
                      <div className="signup-wrapper">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          {...register("phone", {
                            required: "Phone is required",
                            minLength: 10,
                          })}
                        />
                        {errors.phone && (
                          <span className="error-message">
                            {errors.phone.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="signup-wrapper">
                        <input
                          className="password_input"
                           type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          {...register("password", {
                            required: "Password is required",
                            minLength: 6,
                          })}
                        />
                         <span className="input-icon">
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="password-toggle-btn"
                            >
                              <i
                                className={
                                  showPassword
                                    ? "fa-solid fa-eye"
                                    : "fa-regular fa-eye-slash"
                                }
                              ></i>
                            </button>
                          </span>
                        {errors.password && (
                          <span className="error-message">
                            {errors.password.message}
                          </span>
                        )} 
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="signup-wrapper">
                        <NiceSelectTwo
                          options={GenderData}
                          defaultCurrent={0}
                          onChange={selectHandler}
                          name=""
                          className="gender_select"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="signup-action">
                    <div className="course-sidebar-list">
                      <input
                        className="signup-checkbo mr-1"
                        type="checkbox"
                        id="sing-up"
                      />
                      <label className="sign-check" htmlFor="sing-up">
                        <span>
                          Accept the terms and{" "}
                          <Link href="/privecy-policy">Privacy Policy</Link>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="sing-buttom mb-20">
                    <button type="submit" className="sing-btn">
                      Register now
                    </button>
                  </div>
                </form>

                {/*end form */}

                <div className="acount-login text-center">
                  <span>
                    Already have an account? <Link href="login">Log in</Link>
                  </span>
                </div>
                <div className="sign-social text-center">
                  <span>Or Sign- in with</span>
                </div>
                <div className="sign-social-icon">
                  <Link href="#" className="sign-facebook">
                    <FacebookIcon />
                    <span className="ml-1">Facebook</span>
                  </Link>
                  <Link href="#" className="sign-gmail">
                    <GoogleIcon />
                    <span className="ml-1">Google</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
