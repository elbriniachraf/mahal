import React from "react";
import MobileMenu from "./MobileMenu";
import useGlobalContext from "@/hooks/use-context";
import Link from "next/link";
import logo from "../../../../public/assets/img/logo/logo-bl.png";
import Image from "next/image";
import {
  useUniqueCompareCount,
  useUniqueProductCount,
  useUniqueWishlstCount,
} from "@/hooks/useCartQuantity";
import SidebarMenuSearch from "./SidebarMenuSearch";
const SidebarMenu = () => {
  const { sideMenuOpen, setSideMenuOpen } = useGlobalContext();
  const totalCart = useUniqueProductCount();
  const totatWishlist = useUniqueWishlstCount();
  const totatCompare = useUniqueCompareCount();
  return (
    <div className="fix">
      <div className={sideMenuOpen ? "side-info info-open" : "side-info"}>
        <div className="side-info-content">
          <div className="offset-widget offset-logo mb-20">
            <div className="row align-items-center">
              <div onClick={() => setSideMenuOpen(!sideMenuOpen)} className="col-9">
                <Link href="/">
                  <Image src={logo} alt="Logo" />
                </Link>
              </div>
              <div
                onClick={() => setSideMenuOpen(!sideMenuOpen)}
                className="col-3 text-end"
              >
                <button className="side-info-close">
                  <i className="fal fa-times"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="mobile-menu d-lg-none fix mean-container">
            <SidebarMenuSearch />
            <div className="mean-bar">
              <Link
                href="#nav"
                className="meanmenu-reveal"
                style={{ right: "0px", left: "auto", display: "inline" }}
              >
                <span>
                  <span>
                    <span></span>
                  </span>
                </span>
              </Link>
              <nav className="mean-nav">
                <MobileMenu />
              </nav>
            </div>
          </div>
          <div className="offset-profile-action d-xl-none">
            <div className="offset-widget mb-20">
              <div className="action-list action-list-header1">
                <div className="action-item action-item-cart">
                  <button type="button" className="view-cart-button">
                    <i className="fal fa-shopping-bag"></i>
                    <span className="action-item-number">{totalCart}</span>
                  </button>
                </div>
                <div className="action-item action-item-wishlist">
                  <button type="button" className="view-wishlist-button">
                    <i className="fal fa-heart"></i>
                    <span className="action-item-number">{totatWishlist}</span>
                  </button>
                </div>
                <div className="action-item action-item-wishlist">
                  <button type="button" className="view-wishlist-button">
                    <i className="fal fa-exchange"></i>
                    <span className="action-item-number">{totatCompare}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="social__links header-bottom-social">
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
  );
};

export default SidebarMenu;
