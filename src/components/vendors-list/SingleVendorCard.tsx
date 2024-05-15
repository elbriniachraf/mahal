import { vendorType } from "@/interFace/interFace";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import coverImage from "../../../public/assets/img/bg-user/bg-img.png";
import GetRating from "@/hooks/GetRatting";
interface propsType {
  item: vendorType;
}
const SingleVendorCard = ({ item }: propsType) => {
  return (
    <>
      <div className="creator-single mb-30">
        <div className="creator-wraper">
          <div className="creator-inner">
            <div className="creator-cover-img pos-rel">
              <Image src={item?.banner_cloudinary} alt="cover-img" width={500} height={300} />
            </div>
            <div className="creator-content pos-rel">
              <div className="creator-info">
                <div className="profile-img pos-rel oction-creator-profile-img">
                  <Link href={`/vendor-details/${item?.id}`}>
                    <Image
                      width={65}
                      height={65}
                      style={{ height: "100%" }}
                      src={item?.gravatar_cloudinary}
                      
                      alt="cover-img"
                    />
                  </Link>
                  {item?.verified === true && (
                    <div className="profile-verification verified">
                      <i className="fas fa-check"></i>
                    </div>
                  )}
                </div>
                <h4 className="artist-name">{item?.store_name}</h4>
                <h4 className="artist-name">
                  <GetRating averageRating={5} />
                </h4>
              </div>
              <div className="artist-meta-info">
                <div className="artist-meta-item artist-meta-item-border">
                  <div className="artist-meta-type">Items</div>
                  <div className="artist-created">{item?.num_products}</div>
                </div>
                <div className="artist-meta-item artist-meta-item-border">
                  <div className="artist-meta-type">Sells</div>
                  <div className="artist-follwers">100</div>
                </div>
                <div className="artist-meta-item">
                  <div className="artist-meta-type">Vendor</div>
                  <div className="artist-followed">{item?.vendorStatus}</div>
                </div>
              </div>
              <div className="artist-follow-btn">
                <Link
                  href={`/vendor-details/${item?.id}`}
                  className="fill_btn_two"
                >
                  Visit Store
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleVendorCard;
