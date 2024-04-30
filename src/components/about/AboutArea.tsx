import React from "react";
import thumb from "../../../public/assets/img/about/about-thumb.jpg";
import logo from "../../../public/assets/img/about/1990.png";
import Image from "next/image";
import Link from "next/link";

const AboutArea = () => {
  return (
    <>
      <section className="about-area pb-90">
        <div className="container container-small">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-thumb pos-rel mb-30">
                <Image style={{ width: "100%", height: "auto" }} className="about-thumb-main" src={thumb} alt="img" />
                <Image className="est-time-img" src={logo} alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content mb-30 align-pb-35">
                <div className="section-title">
                  <h2 className="section-main-title mb-30">
                    The fashion everything that you want in your life.
                  </h2>
                </div>
                <p className="mb-40">
                  We get it. Getting dressed can be hard and {`we’re`} here to
                  help with that. Whether you’re more of a casual girl I feel
                  you, give me joggers all day every day or are looking to spice
                  things up for your next date night, {`you’ve`} come to the
                  right place. Dig through our piles of posts. Booties, booties,
                  booties {`rockin’ `} everywhere! When it comes to Fall and
                  Winter fashion, boots are my weakness. As part of our growth,
                  Roman has launched a new range of shoes and handbags.
                </p>
                <div className="about-btn">
                  <Link href="/shop-sidebar-5-column" className="fill-btn">
                    Explore Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;
