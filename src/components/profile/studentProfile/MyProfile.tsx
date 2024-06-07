"use client"
import React from "react";
const MyProfile  = ({ userDetails }) => {
  return (
    <>
      <ul className="student-profile-info">
        <li>
          <h5>Registration Date :</h5>
          <span> 09/12/23 11:24 am </span>
        </li>
        <li>
          <h5>Prenom :</h5>
          <span className="text-capitalize"> {userDetails.user.firstname} </span>
        </li>
        <li>
          <h5>Nom :</h5>
          <span className="text-capitalize"> {userDetails.user.lastname} </span>
        </li>
       

        <li>
          <h5>Email :</h5>
          <span> {userDetails.user.email} </span>
        </li>
        <li>
          <h5>Phone :</h5>
          <span> {userDetails.user.phone}  </span>
        </li>
        <li>
          <h5>Gender :</h5>
          <span>  Homme </span>
        </li>
        <li>
          <h5>Biography :</h5>
          <span>
           
          </span>
        </li>
      </ul>
    </>
  );
};

export default MyProfile;
