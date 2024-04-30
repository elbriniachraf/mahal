"use client";
import GetRatting from "@/hooks/GetRatting";

import Link from "next/link";
import React, { useState } from "react";
 
import { useForm, SubmitHandler } from "react-hook-form";
import { bestReviewData } from "@/data/best-review-data";
import { UserReviewType } from "@/interFace/interFace";
import { toast } from "sonner";

interface FormData {
  review: string;
}
const UserReviews = () => {
  const [myReviews, setMyReviews] = useState<UserReviewType[]>(bestReviewData);
  const [singleReview, setSingleReview] = useState<Record<string, any>>({});
  const [retting, setRetting] = useState<number>(0);
  const [edeteActive, setEdeteActive] = useState<boolean>(false);
  const [updateReview, setupdateReview] = useState<boolean>(false);
  const [edetedId, setEdetedId] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const rettings = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
  ];

  const handleDeleteReview = (item: UserReviewType) => {
    const toastId = toast.loading("");
    const remainingReviews = myReviews.filter((itm) => itm.id !== item?.id);
    setMyReviews(remainingReviews);
    toast.success("Review Deleted", { id: toastId, duration: 1000 });
  };

  const handleActiveEdete = (item: UserReviewType) => {
    setEdeteActive(!edeteActive);
    setEdetedId(item?.id);
    setSingleReview(item);
  };

  const handleResetEdete = () => {
    setEdeteActive(!edeteActive);
    setRetting(0);
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const review = data.review ? data.review : singleReview?.review;
    const newretting = retting ? retting : singleReview?.retting;
    setEdeteActive(!edeteActive);
    setRetting(0);
    setupdateReview(!updateReview);
    toast.success(`Review Updated`);
  };

  return (
    <>
      {myReviews.length ? (
        <div
          className={`student-profile-reviews ${
            myReviews.length > 4 ? "scrollbox" : ""
          }`}
        >
          {myReviews.map((item) => (
            <div key={item.id} className="student-profile-reviews-item mb-30">
              <div className="student-profile-reviews-course-title">
                <h5>
                  {" "}
                  <Link href={`/shop-details/${item?.productId}`}>
                    {item?.productName
                      ? item?.productName
                      : "Product Name Not Set"}
                  </Link>{" "}
                </h5>
              </div>
              {edeteActive && item.id === edetedId ? (
                <>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="student-profile-reviews-text"
                  >
                    <div className="student-profile-reviews-text-wrap mb-20">
                      {retting === 0 ? (
                        <>
                          <div className="student-profile-review-icon d-flex">
                            {rettings.map((item) => (
                              <li
                                onClick={() => setRetting(item.id)}
                                key={item.id}
                              >
                                <span>
                                  <i className="fal fa-star"></i>
                                </span>
                              </li>
                            ))}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="student-profile-review-icon">
                            <GetRatting averageRating={retting} />
                          </div>
                        </>
                      )}

                      <div className="student-profile-review-update">
                        <button
                          onClick={() => handleActiveEdete(item)}
                          type="button"
                          className="student-profile-review-update-btn"
                        >
                          <i className="far fa-edit"></i> Edit
                        </button>
                        <button
                          onClick={() => handleDeleteReview(item)}
                          type="button"
                          className="student-profile-review-update-btn"
                        >
                          <i className="far fa-trash-alt"></i> Delete
                        </button>
                      </div>
                    </div>

                    <div className="contact-from-input mb-20">
                      <label htmlFor="Current">Change Review</label>
                      <textarea
                        placeholder="Your review"
                        className="comment-input comment-textarea"
                        defaultValue={item?.review}
                        {...register("review")}
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="comment-submit">
                        <button type="submit" className="fill_btn_two">
                          Update
                        </button>
                      </div>
                      <div>
                        <div className="cont-btn mb-20">
                          <button
                            onClick={handleResetEdete}
                            className="fill_btn_two"
                          >
                            <i className="fa-solid fa-xmark"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <div className="student-profile-reviews-text">
                    <div className="student-profile-reviews-text-wrap mb-20">
                      <div className="student-profile-review-icon">
                        <GetRatting averageRating={item?.retting} />
                      </div>
                      <div className="student-profile-review-update d-flex">
                        <button
                          onClick={() => handleActiveEdete(item)}
                          type="button"
                          className="student-profile-review-update-btn"
                        >
                          <i className="far fa-edit"></i> Edit
                        </button>
                        <button
                          onClick={() => handleDeleteReview(item)}
                          type="button"
                          className="student-profile-review-update-btn"
                        >
                          <i className="far fa-trash-alt"></i> Delete
                        </button>
                      </div>
                    </div>
                    <div className="student-profile-review-content">
                      <p>{item?.review}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      ) : (
        <>
          <p className="text-center">No Reviews </p>
        </>
      )}
    </>
  );
};

export default UserReviews;
