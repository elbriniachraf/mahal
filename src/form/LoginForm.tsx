"use client";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import FacebookIcon from "@/svg/FacebookIcon";
import { useFormik } from 'formik';
import * as yup from 'yup'
import GoogleIcon from "@/svg/GoogleIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useSelector } from "react-redux";

const schemaLogin = yup.object().shape({
  email: yup.string()
    .email('Invalid email!')
    .required('Please enter your email address'),
  password: yup.string()
    .required('Please enter your password')
    .min(6),
})

const LoginForm = () => {
  const router = useRouter();
  const [login, {data, isError, isSuccess, isLoading, error}] = useLoginMutation();
  
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schemaLogin,
    onSubmit:  ({ email, password }, {resetForm}) => {
      login({email, password})
    }
  })
  const { errors, values, handleSubmit, handleChange, touched } = formik;

  useEffect(() => {
    if (isSuccess) {
      toast.success('You successfully logged in');
      formik.resetForm();
      router.push("/profile");
    }
    if (isError) {
      const toastId = toast.loading("");
      toast.error("Email Or Password Invalid", { id: toastId, duration: 1000 });
    }
  }, [isLoading]);
  return (
    <>
      <div className="register-area pt-120 pb-120">
        <div className="container container-small">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="signup-form-wrapper">
                <form onSubmit={handleSubmit}>
                  <div className="signup-wrapper">
                    <input
                      type="email"
                      placeholder="Email or Username"
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
                  <div className="signup-wrapper">
                    <input
                      type="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      id='password'
                    />
                    {touched.password && errors.password && (
                      <span className="error-message">
                        {errors.password}
                      </span>
                    )}
                  </div>
                  <div className="signup-action">
                    <div className="course-sidebar-list">
                      <input
                        className="signup-checkbo mr-1"
                        type="checkbox"
                        id="sing-in"
                      />
                      <label className="sign-check" htmlFor="sing-in">
                        <span>Remember me</span>
                      </label>
                    </div>
                  </div>
                  <div className="sing-buttom mb-20">
                    <button type="submit" className="sing-btn">
                      Login Now
                    </button>
                  </div>
                </form>

                <div className="registered wrapper">
                  <div className="not-register">
                    <span>Not registered?</span>
                    <span>
                      <Link href="/register">Sign up</Link>
                    </span>
                  </div>
                  <div className="forget-password">
                    <Link href="/forgot-password">Forgot password?</Link>
                  </div>
                </div>
                <div className="sign-social text-center">
                  <span>Or Sign- in with</span>
                </div>
                <div className="sign-social-icon">
                  <div className="sign-facebook">
                    <FacebookIcon />
                    <Link className="ml-1" href="#">
                      Facebook
                    </Link>
                  </div>
                  <div className="sign-gmail">
                    <GoogleIcon />
                    <Link className="ml-1" href="#">
                      Google
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
