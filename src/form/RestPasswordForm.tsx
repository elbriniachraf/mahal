"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface FormData {
  password: string;
  newPassword: string;
}

const RestPasswordForm = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);
  const [registerError, setregisterError] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const toastId = toast.loading("");
    const currentPassword = data.password;
    const newPassword = data.newPassword;

    const updatePassword = {
      email: "youremailwillbe here",
      currentPassword,
      newPassword,
    };

    toast.success("password changed",{ id: toastId, duration: 1000 })
    router.push("/login")
  
  };

  return (
    <>
      <div className="bd-login__area">
        <div className="container small-container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="Login-form-wrapper">
                <div className="bd-postbox__contact">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="bd-password-box d-flex justify-content-between">
                          <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Current Password"
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
                            <span>{errors.password.message}</span>
                          )}
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="bd-password-box d-flex justify-content-between">
                          <input
                            type={showPasswordTwo ? "text" : "password"}
                            placeholder=" New Password"
                            {...register("newPassword", {
                              required: "newPassword is required",
                              minLength: 6,
                            })}
                          />
                          <span className="input-icon">
                            <button
                              type="button"
                              onClick={() =>
                                setShowPasswordTwo(!showPasswordTwo)
                              }
                              className="password-toggle-btn"
                            >
                              <i
                                className={
                                  showPasswordTwo
                                    ? "fa-solid fa-eye"
                                    : "fa-regular fa-eye-slash"
                                }
                              ></i>
                            </button>
                          </span>
                          {errors.password && (
                            <span>{errors.password.message}</span>
                          )}
                        </div>
                      </div>

                      <div className="mb-20">
                        <button className="update_btn" type="submit">
                          Update
                        </button>
                      </div>
                    </div>
                  </form>
                  <span>{registerError && registerError}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestPasswordForm;
