import React from "react";
import cardImg1 from "../../../public/assets/img/cards/card-1.png";
import cardImg2 from "../../../public/assets/img/cards/card-2.png";
import cardImg3 from "../../../public/assets/img/cards/card-3.png";
import cardImg4 from "../../../public/assets/img/cards/card-4.png";
import appStore1 from "../../../public/assets/img/apps/app-store-1.png";
import appStore2 from "../../../public/assets/img/apps/app-store-2.png";
import Image from "next/image";
import Link from "next/link";
import HelpLIneIcon from "@/svg/HelpLIneIcon";
const FooterOne = () => {
  return (
    <>
      <footer data-background="" className="footer1-bg">
        <section className="footer-area footer-area1 footer-area1-bg pt-95 pb-55">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget footer1-widget footer1-widget1 mb-40">
                  <div className="footer-widget-title">
                    <h4>Information</h4>
                  </div>
                  <ul>
                    <li>
                      <Link href="/about">About Company</Link>
                    </li>
                    <li>
                      <Link href="/about">Payment Type</Link> 
                    </li>
                    <li>
                      <Link href="/about">Awards Winning</Link>
                    </li>
                    <li>
                      <Link href="/about">World Media Partner</Link>
                    </li>
                    <li>
                      <Link href="/about">Become an Agent</Link>
                    </li>
                    <li>
                      <Link href="/privecy-policy">Refund Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget footer1-widget footer1-widget2 mb-40">
                  <div className="footer-widget-title">
                    <h4>Category</h4>
                  </div>
                  <ul>
                    <li>
                      <Link href="/shop-sidebar-5-column">Handbags & Wallets</Link>
                    </li>
                    <li>
                      <Link href="/shop-sidebar-4-column"> {`Women's`} Clothing</Link>
                    </li>
                    <li>
                      <Link href="/shop-sidebar-3-column">Plus Sizes</Link>
                    </li>
                    <li>
                      <Link href="/shop-full-6-column">Complete Your Look</Link>
                    </li>
                    <li>
                      <Link href="/shop-full-5-column">Baby Corner</Link>
                    </li>
                    <li>
                      <Link href="/shop-full-4-column">Man & Woman Shoe</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget footer1-widget footer1-widget3 mb-40 ">
                  <div className="footer-widget-title">
                    <h4>Help & Support</h4>
                  </div>
                  <ul>
                    <li>
                      <Link href="/become-vendor">Vendor</Link>
                    </li>
                    <li>
                      <Link href="/faq">FAQ Information</Link>
                    </li>
                    <li>
                      <Link href="/privecy-policy">Return Policy</Link>
                    </li>
                    <li>
                      <Link href="/privecy-policy">Shipping & Delivery</Link>
                    </li>
                    <li>
                      <Link href="/track-order">Order Tranking</Link>
                    </li>
                    <li>
                      <Link href="/shop-full-4-column">List of Shops</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget footer1-widget footer1-widget4 mb-40 ">
                  <div className="footer-widget-title">
                    <h4>Newsletter</h4>
                  </div>
                  <p className="mb-20">
                    Enter your email below to be the first to know about new
                    collections and product launches.
                  </p>
                  <form
                    action="#"
                    className="subscribe-form subscribe-form-footer1"
                  >
                    <input type="text" placeholder="Enter your email" />
                    <button type="submit">
                      Subscribe Now<i className="fas fa-long-arrow-right"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="footer-bottom-area footer-bottom1-area">
          <div className="container">
            <div className="footer-bottom1-inner">
              <div className="irc-item footer-support">
                <div className="irc-item-icon">
                   <HelpLIneIcon/>
                </div>
                <div className="irc-item-content">
                  <p>8:30 AM - 10:30</p>
                  <div className="support-number">
                    <Link href="tel:555-900-888">555 - 900 - 888</Link>
                  </div>
                </div>
              </div>
              <div className="cards-wrapper cards-wrapper-lines">
                <p>We Support</p>
                <div className="card-links">
                  <ul>
                    <li>
                      <Link href="#">
                        <Image src={cardImg1} alt="card-img" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <Image src={cardImg2} alt="card-img" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <Image src={cardImg3} alt="card-img" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <Image src={cardImg4} alt="card-img" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="apps-download">
                <div className="apps-download-text">
                  <h5>Download App on Mobile</h5>
                  <p>Free home delivery on your first purchase</p>
                </div>
                <div className="app-links">
                  <ul>
                    <li>
                      <Link href="#">
                        <Image src={appStore1} alt="app-img" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <Image src={appStore2} alt="app-img" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area copyright1-area">
          <div className="container">
            <div className="copyright1-inner">
              <div className="copyright-text copyright1-text">
                Copyright by{" "}
                <Link href="https://themeforest.net/user/bdevs/portfolio">
                  BDevs
                </Link>
                . All Rights Reserved
              </div>
              <div className="copyright-link">
                <Link href="/privecy-policy" className="text-btn">
                  Privacy Policy
                </Link>
                <Link href="/privecy-policy" className="text-btn">
                  Terms & Conditions
                </Link>
                <Link href="/privecy-policy" className="text-btn">
                  Sitemap
                </Link>
              </div>
              <div className="social-wrapper">
                <p>Follow Us:</p>
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
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
