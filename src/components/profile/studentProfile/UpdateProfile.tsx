"use client";
import React from "react";
import bgImg from "../../../../public/assets/img/bg-user/bg-img.png";
import thumb from "../../../../public/assets/img/testimonial/author-1.jpg";
import Image from "next/image";
import RestPasswordForm from "@/form/RestPasswordForm";
import UserProfileUpdate from "@/form/UserProfileUpdate";
const UpdateProfile = () => {
  return (
    <>
      <div className="student-profile-enroll">
        <ul className="nav mb-50" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="profileA-tab"
              data-bs-toggle="tab"
              data-bs-target="#profileA"
              type="button"
              role="tab"
              aria-controls="profileA"
              aria-selected="true"
            >
              Profile
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="password-tab"
              data-bs-toggle="tab"
              data-bs-target="#password"
              type="button"
              role="tab"
              aria-controls="password"
              aria-selected="false"
            >
            Change Password
            </button>
          </li>
        </ul>
        <div className="tab-content mt-30" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="profileA"
            role="tabpanel"
            aria-labelledby="profileA-tab"
          >
            <div className="student-profile-settings">
              <div className="student-profile-setting-img mb-40">
                <div
                  className="student-profile-setting-cover-img"
                  style={{ backgroundImage: `url(${bgImg.src})` }}
                ></div>
                <div className="student-profile-setting-author-img upload-profile-pic">
                  <Image
                    width={200}
                    height={200}
                    style={{ width: "auto", height: "auto" }}
                    src={thumb}
                    alt="img not found"
                  />
                  
                </div>
              </div>
              <UserProfileUpdate />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="password"
            role="tabpanel"
            aria-labelledby="password-tab"
          >
            <RestPasswordForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
