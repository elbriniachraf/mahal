"use client";

import Link from "next/link"; 
import React, { useState } from "react";
 
import { useForm, SubmitHandler } from "react-hook-form";
import { commentData } from "@/data/blog-comment-data";
import { CommentType } from "@/interFace/interFace";
import { toast } from "sonner";

interface FormData {
  comment: string;
}
const UserComments = () => {
  const [myComments, setMyComments] = useState<CommentType[]>(commentData);
  const [comment, setComment] = useState<Record<string, any>>({});
  const [edeteActive, setEdeteActive] = useState<boolean>(false);
  const [updateComment, setupdateComment] = useState<boolean>(false);
  const [edetedId, setEdetedId] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleDeleteReview = (item: CommentType) => {
    const remainingReviews = myComments.filter((itm) => itm.id !== item?.id);
    setMyComments(remainingReviews);
    toast.success("Comment Deleted");
  };

  const handleActiveEdete = (item: CommentType) => {
    setEdeteActive(!edeteActive);
    setEdetedId(item?.id);
    setComment(item);
  };

  const handleResetEdete = () => {
    setEdeteActive(!edeteActive);
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const toastId = toast.loading("");
    //  use it after api response
    setEdeteActive(!edeteActive);
    setupdateComment(!updateComment);
    toast.success(`Review Updated`, { id: toastId, duration: 1000 });
  };

  return (
    <>
      {myComments.length ? (
        <div
          className={`student-profile-reviews ${
            myComments.length > 4 ? "scrollbox" : ""
          }`}
        >
          {myComments.map((item, index) => (
            <div key={item.id} className="student-profile-reviews-item mb-30">
              <div className="student-profile-reviews-course-title">
                <h5>
                  {" "}
                  <Link href={`/blog-details/${index + 1}`}>
                    {item?.title ? item?.title : "Blog Name Not Set"}
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
                      <div className="student-profile-review-icon">
                        <p>{item?.date}</p>
                      </div>
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
                      <label htmlFor="Current">Update Comment</label>
                      <textarea
                        placeholder="Your review"
                        className="comment-input comment-textarea"
                        defaultValue={item?.comment}
                        {...register("comment")}
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
                        <p>{item?.date}</p>
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
                      <p>{item?.comment}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      ) : (
        <>
          <p className="text-center">No comments </p>
        </>
      )}
    </>
  );
};

export default UserComments;
