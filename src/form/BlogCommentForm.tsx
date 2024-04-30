"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
 

interface FormData {
  name: string;
  website: string;
  email: string;
  message: string;
}

const BlogCommentForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const toastId = toast.loading("");
    console.log(data);
    reset()
    toast.success("Comment Send Successfully", { id: toastId, duration: 1000 })
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="blog__comment-input">
              <input
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: "Name is required",
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
              {errors.name && (
                <span className="error-message">{errors.name.message}</span>
              )}
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="blog__comment-input">
              <input
                type="text"
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
                <span className="error-message">{errors.email.message}</span>
              )}
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="blog__comment-input">
              <input
                type="text"
                placeholder="Website url"
                {...register("website", {
                  required: "Website is required",
                })}
              />
              {errors.website && (
                <span className="error-message">{errors.website.message}</span>
              )}
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="blog__comment-input">
              <textarea
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
                name="message"
                id="message"
                placeholder="Messages"
              ></textarea>
              {errors.message && (
                <span className="error-message">{errors.message.message}</span>
              )}
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="blog__comment-agree d-flex align-items-center mb-20">
              <input className="e-check-input" type="checkbox" id="e-agree" />
              <label className="e-check-label" htmlFor="e-agree">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="blog__comment-btn">
              <button type="submit" className="fill-btn">
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default BlogCommentForm;
