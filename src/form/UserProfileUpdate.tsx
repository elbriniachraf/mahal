"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

import { GenderData } from "@/data/nice-select-data";
import NiceSelectTwo from "@/components/common/NiceSelectTwo";
import { toast } from "sonner";
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
}

const UserProfileUpdate = () => {
  const [Gender, setGender] = useState<string>("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // update profile info

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const toastId = toast.loading("");
    const name = `${data.firstName} ${data.lastName}`;
    const phone = data.phone;
    const gender = Gender;
    const userUpdateInfo = {
      id: 12354,
      name,
      phone,
      gender,
      photo: "photo-link",
    };
    router.push("/profile");
    toast.success(`profile Updated`, { id: toastId, duration: 1000 });
  };

  const selectHandler = () => {};

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <div className="signup-wrapper mb-20">
              <input
                id="FirstName"
                type="text"
                placeholder="First Name"
                {...register("firstName")}
                defaultValue={"Jhonathon"}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="signup-wrapper mb-20">
              <input
                id="LastName"
                type="text"
                placeholder="Last Name"
                {...register("lastName")}
                defaultValue={"Smith"}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="signup-wrapper mb-20">
              <input
                id="Email"
                type="email"
                placeholder="Email"
                readOnly
                defaultValue={"jhonathonsmith@gamil.com"}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="signup-wrapper mb-20">
              <input
                id="Phone"
                type="text"
                placeholder="Phone"
                {...register("phone")}
                defaultValue={"+8852416352"}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-from-input mb-20">
              <NiceSelectTwo
                options={GenderData}
                defaultCurrent={0}
                onChange={selectHandler}
                name=""
                className="gender-select"
              />
            </div>
          </div>

          <div className="col-sm-12">
            <div className="cont-btn mb-20  mt-30">
              <button type="submit" className="fill-btn">
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default UserProfileUpdate;
