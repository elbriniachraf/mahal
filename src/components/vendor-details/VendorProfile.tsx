"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import bgImg from "../../../public/assets/img/bg-user/bg-img.png";
import { vendor_data } from "@/data/vendor-list-data";
import GetRating from "@/hooks/GetRatting";
import Link from "next/link";
import axios from "axios";
interface propsType {
  vendorId: string;
}
const VendorProfile = ({ vendorId }: propsType) => {
  const [vendorInfo, setVendorInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVendorInfo = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/vendors/${vendorId}`);
       
        const data = response.data;
        setVendorInfo(data);


        console.log(vendorInfo);
        
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchVendorInfo();
  }, [vendorId]);
  return (
    <>
      <section className="mb-50 profile_vendor_sec">
        <div
          className="student-profile-setting-cover-img"
          style={{ backgroundImage: `url(${vendorInfo?.banner_cloudinary})` }}
        ></div>

        <div className="vendor_profile_wrapper">
          <div className="container bg-white">
            <div className="row justify-content-center vendor_details_content">
              <div className="col-xl-2 col-12">
                <div className="vendor_logo">
                  <div className="vendor_card_with_img">
                    <Image
                      src={vendorInfo?.gravatar_cloudinary as StaticImageData}
                      alt="img not found"
                      width={300}
                      height={300}

                    />
                    {vendorInfo?.verified === true && (
                      <div className="profile-verification verified">
                        <i className="fas fa-check"></i>
                      </div>
                    )}
                  </div>
                  <div className="basic_info">
                    <h4 className="mt-10">{vendorInfo?.store_name}</h4>
                  </div>
                  <div className="vendor_ratting">
                    <GetRating
                      averageRating={5 as number}
                    />
                    (120 Reviews)
                  </div>
                  <div className="vendor_ratting">
                    <p> publish</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-12">
                <div className="vendor_description">
                  <p>
Au cœur du centre-ville, une boutique de vêtements élégante attire l'attention avec ses vitrines sophistiquées et son ambiance accueillante. À l'intérieur, une sélection soigneusement organisée de vêtements pour hommes et femmes offre un mélange éclectique de styles, tandis que le personnel attentif et passionné est prêt à offrir des conseils personnalisés.</p>
                </div>
              </div>
              <div className="col-xl-2 col-12">
                <div className="vendor_social-wrap">
                  <div className="vendor_social">
                    <h4 className="text-center">Suivre Nous</h4>
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
