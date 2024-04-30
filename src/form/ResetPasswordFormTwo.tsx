 

 "use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
interface FormData {
  newPassword: string;
}

const ResetPasswordFormTwo = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const newPassword = data.newPassword;

    const userInfo = {
      newPassword,
    };
    router.push("/login")
  };
  return (
    <>
      <div className="register-area">
        <div className="container container-small">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="signup-form-wrapper">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="signup-wrapper">
                    <input
                      type="text"
                      placeholder="Enter New Password Here"
                      {...register("newPassword", {
                        required: "newPassword is required",
                      })}
                    />
                    {errors.newPassword && (
                      <span className="error-message">
                        {errors.newPassword.message}
                      </span>
                    )}
                  </div>

                  <div className="sing-buttom mb-20">
                    <button type="submit" className="sing-btn">
                       Reset Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordFormTwo;
