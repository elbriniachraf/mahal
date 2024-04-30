"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import bgImg from "../../../public/assets/img/bg-user/bg-img.png";
import { vendor_data } from "@/data/vendor-list-data";
import GetRating from "@/hooks/GetRatting";
import Link from "next/link";
interface propsType {
  vendorId: string;
}
const VendorProfile = ({ vendorId }: propsType) => {
  const vendorInfo = vendor_data?.find((item) => item.vendorId === vendorId);

  return (
    <>
      <section className="mb-50 profile_vendor_sec">
        <div
          className="student-profile-setting-cover-img"
          style={{ backgroundImage: `url(${vendorInfo?.vendorBanner?.src})` }}
        ></div>

        <div className="vendor_profile_wrapper">
          <div className="container bg-white">
            <div className="row justify-content-center vendor_details_content">
              <div className="col-xl-2 col-12">
                <div className="vendor_logo">
                  <div className="vendor_card_with_img">
                    <Image
                      src={vendorInfo?.vendorImg as StaticImageData}
                      alt="img not found"
                    />
                    {vendorInfo?.verified === true && (
                      <div className="profile-verification verified">
                        <i className="fas fa-check"></i>
                      </div>
                    )}
                  </div>
                  <div className="basic_info">
                    <h4 className="mt-10">{vendorInfo?.vendor}</h4>
                  </div>
                  <div className="vendor_ratting">
                    <GetRating
                      averageRating={vendorInfo?.averageRating as number}
                    />
                    ({vendorInfo?.totalRating} Reviews)
                  </div>
                  <div className="vendor_ratting">
                    <p> {vendorInfo?.vendorStatus} | {vendorInfo?.Sells} Item Sales</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-12">
                <div className="vendor_description">
                  <p>{vendorInfo?.description}</p>
                </div>
              </div>
              <div className="col-xl-2 col-12">
                <div className="vendor_social-wrap">
                  <div className="vendor_social">
                    <h4 className="text-center">Follow Us</h4>
                    <div className="social__links">
                      <ul>
                        <li>
                          <Link target="_blank" href="https://www.facebook.com/">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link target="_blank" href="https://twitter.com/">
                            <i className="fab fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link target="_blank" href="https://www.instagram.com/">
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </li>
                        <li>
                          <Link target="_blank" href="https://www.pinterest.com/">
                            <i className="fab fa-pinterest-p"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h5 className="text-center">If You Have Any Query:</h5>
                    <Link
                      href="tel:(+88)872-670-780"
                      className="border-btn mt-10"
                    >
                      Call Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VendorProfile;
