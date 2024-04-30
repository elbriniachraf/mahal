"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
 
interface FormData {
  code: string;
}

const EmailVerificationForm = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const toastId = toast.loading("");
    const code = data.code;

    const userInfo = {
      code,
    };
    toast.success("Code Send On Your Email", { id: toastId, duration: 1000 })
    router.push("/profile")
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
                      placeholder="Enter 6 Digit Code Here"
                      {...register("code", {
                        required: "Code is required",
                      })}
                    />
                    {errors.code && (
                      <span className="error-message">
                        {errors.code.message}
                      </span>
                    )}
                  </div>

                  <div className="sing-buttom mb-20">
                    <button type="submit" className="sing-btn">
                      Verify Now
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

export default EmailVerificationForm;
