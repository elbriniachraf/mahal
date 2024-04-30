"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
 
interface FormData {
  review: string;
}

const ReviewForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const toastId = toast.loading("");
    const review = data.review;

    const userInfo = {
      review,
    };
    reset();
    toast.success("Review Send Successfully",{ id: toastId, duration: 1000 });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-xxl-12">
            <div className="review_box p-relative">
              <textarea
                {...register("review", {
                  required: "Review is required",
                })}
                placeholder="Your review"
                className="comment-input comment-textarea mb-20"
              ></textarea>

              {errors.review && (
                <span className="error-message">{errors.review.message}</span>
              )}
            </div>
          </div>

          <div className="col-xxl-12">
            <div className="comment-submit review-add">
              <button type="submit" className="fill-btn">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ReviewForm;
