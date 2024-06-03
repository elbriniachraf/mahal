"use client";

import NiceSelectTwo from "@/components/common/NiceSelectTwo";
import { GenderData } from "@/data/nice-select-data";
import useGlobalContext from "@/hooks/use-context";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import FacebookIcon from "@/svg/FacebookIcon";
import GoogleIcon from "@/svg/GoogleIcon";
import { useFormik } from "formik";
import * as yup from 'yup'
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const schemaRegister = yup.object().shape({
  firstName: yup.string()
    .required('Please enter your First name'),
  lastName: yup.string()
    .required('Please enter your Last name'),
  phone: yup.string()
    .required('Please enter your First name'),
  ville: yup.string()
    .required('Please enter your First name'),
  email: yup.string()
    .email('Invalid email!')
    .required('Please enter your email address'),
  password: yup.string()
    .required('Please enter your password')
    .min(6),
})

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter();
  const [register, {data, isError, isSuccess, isLoading, error}] = useRegisterMutation();
  // const {user} = useSelector((state: any) => state?.auth);
  const formik = useFormik({
    initialValues: { 
      firstName: '',
      lastName: '',
      phone: '',
      ville: '',
      email: '',
      password: '',
    },
    validationSchema: schemaRegister,
    onSubmit:  (values, {resetForm}) => {
      register(values)
      const toastId = toast.loading("");
      toast.success("Login Success", { id: toastId, duration: 1000 });
      resetForm();
      // router.push("/");
    }
  })
  const { errors, values, handleSubmit, handleChange, touched } = formik;

  const selectHandler = () => {};
  return (
    <>
      <div className="register-area pt-120 pb-120">
        <div className="container container-small">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="signup-form-wrapper">
                {/* form */}

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="signup-wrapper">
                        <input
                          type="text"
                          placeholder="First Name"
                          id="firstName"
                          value={values.firstName}
                          onChange={handleChange}
                        />
                        {touched.firstName && errors.firstName && (
                          <span className="error-message">
                            {errors.firstName}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="signup-wrapper">
                        <input
                          type="text"
                          placeholder="Last Name"
                          id="lastName"
                          value={values.lastName}
                          onChange={handleChange}
                        />
                        {touched.lastName && errors.lastName && (
                          <span className="error-message">
                            {errors.lastName}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="signup-wrapper">
                        <input
                          type="text"
                          placeholder="Phone"
                          id="phone"
                          value={values.phone}
                          onChange={handleChange}
                        />
                        {touched.phone && errors.phone && (
                          <span className="error-message">
                            {errors.phone}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="signup-wrapper">
                        <input
                          type="text"
                          placeholder="Ville"
                          id="ville"
                          value={values.ville}
                          onChange={handleChange}
                        />
                        {touched.ville && errors.ville && (
                          <span className="error-message">
                            {errors.ville}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="signup-wrapper">
                        <input
                          type="email"
                          placeholder="Email"
                          id="email"
                          value={values.email}
                          onChange={handleChange}
                        />
                        {touched.email && errors.email && (
                          <span className="error-message">
                            {errors.email}
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
                          id="password"
                          value={values.password}
                          onChange={handleChange}
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
                        {touched.password && errors.password && (
                          <span className="error-message">
                            {errors.password}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="signup-wrapper">
                        {/* <NiceSelectTwo
                          options={GenderData}
                          defaultCurrent={0}
                          onChange={selectHandler}
                          name=""
                          className="gender_select"
                        /> */}
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
