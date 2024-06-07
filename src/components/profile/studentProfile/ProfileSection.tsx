"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import ProfileSidebar from "./ProfileSidebar";
import DashboardCounter from "./DashboardCounter";
import DefaultDashboard from "./DefaultDashboard";
import MyProfile from "./MyProfile";
import thumb from "../../../../public/assets/img/testimonial/author-1.jpg";
import OrderHistory from "./OrderHistory";
import UpdateProfile from "./UpdateProfile";
import UserReviews from "./UserReviews";
import UserComments from "./UserComments";
import PaymentInfo from "./PaymentInfo";
import CancelOrderTrack from "./CancelOrderTrack";

const ProfileSection = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("auth_token")
      console.log("tokeennnnnn ",token);
      
    if (token) {
      axios
        .post(
          'http://localhost:8000/api/userDetails', 
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          setUserDetails(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading account details: {error.message}</p>;

  return (
    <div className="course-details-area pt-120 pb-100">
      <div className="container container-small">
        <div className="student-profile-author pb-30">
          <div className="student-profile-author-img">
            <Image
              src={thumb}
              style={{ width: "100%", height: "auto" }}
              alt="img not found"
            />
          </div>
          <div className="student-profile-author-text">
            <span>Hello,</span>
            <h3 className="student-profile-author-name text-capitalize">
              {userDetails ? userDetails.user.firstname+" "+userDetails.user.lastname : "John Smith"}
            </h3>
          </div>
        </div>
        <div className="row">
          <ProfileSidebar />
          <div className="col-xl-9 col-lg-8">
            <div className="student-profile-content">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <h4 className="mb-25">Dashboard</h4>
                  <div className="student-profile-content-fact">
                    <DashboardCounter userDetails={userDetails} />
                    <div className="row">
                      <div className="col-lg-12">
                        <h4 className="mb-25">My Recent Purches Products</h4>
                        <DefaultDashboard  userDetails={userDetails}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <h4 className="mb-25">Mon profile</h4>
                  <MyProfile userDetails={userDetails} />
                </div>

                <div
                  className="tab-pane fade"
                  id="wishlist"
                  role="tabpanel"
                  aria-labelledby="wishlist-tab"
                >
                  <h4 className="mb-25">Mes payements</h4>
                  <div className="student-profile-wishlist">
                    <div className="row">
                      <PaymentInfo userDetails={userDetails} />
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="reviews"
                  role="tabpanel"
                  aria-labelledby="reviews-tab"
                >
                  <h4 className="mb-25">Reviews</h4>
                  <UserReviews />
                </div>

                <div
                  className="tab-pane fade"
                  id="comments"
                  role="tabpanel"
                  aria-labelledby="comments-tab"
                >
                  <h4 className="mb-25">Comments</h4>
                  <UserComments />
                </div>

                <div
                  className="tab-pane fade"
                  id="history"
                  role="tabpanel"
                  aria-labelledby="history-tab"
                >
                  <h4 className="mb-25">Order History</h4>
                  <OrderHistory />
                </div>

                <div
                  className="tab-pane fade"
                  id="cancel"
                  role="tabpanel"
                  aria-labelledby="cancel-tab"
                >
                  <h4 className="mb-25">Cancel Orders</h4>
                  <CancelOrderTrack />
                </div>

                <div
                  className="tab-pane fade"
                  id="setting"
                  role="tabpanel"
                  aria-labelledby="setting-tab"
                >
                  <h4 className="mb-25">Settings</h4>
                  <UpdateProfile />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
