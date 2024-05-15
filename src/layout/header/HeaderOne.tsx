import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import logoImg from "../../../public/assets/img/logo_m.png";
import Image from "next/image";
import Menu from "./components/Menu";
import useGlobalContext from "@/hooks/use-context";
import {
  useTotalProductCount,
  useTotalProductWishlistCount,
  useUniqueCompareCount,
} from "@/hooks/useCartQuantity";
import NiceSelectTwo from "@/components/common/NiceSelectTwo";
import { currency_data, language_data } from "@/data/nice-select-data";
import SearchHeaderOne from "./components/SearchHeaderOne";
import { useRouter } from "next/navigation";
import SupportIcon from "@/svg/SupportIcon";
import SupportIconWithHeadphone from "@/svg/SupportIconWithHeadphone";
import axios from 'axios';
const HeaderOne = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const searchRef = useRef(null);
  const {
    setSideCartOpen,
    sideCartOpen,
    sideWishlistOpen,
    setSideWishlistOpen,
    toggleSideMenu,
    scrollDirection,
  } = useGlobalContext();
  const [openCategory, setOpenCategory] = useState<boolean>(false);
  const totalCart = useTotalProductCount();
 

  const totatWishlist = useTotalProductWishlistCount();
  const totatCompare = useUniqueCompareCount();
  const selectHandler = () => {};
  const handleCompare = () => {
    router.push("/compare");
  };
  const [categories, setCategories] = useState<any>([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/categories'); // Modifier l'URL de l'API selon votre configuration
      setCategories(response.data.categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories(); // Appeler la fonction pour récupérer les catégories au chargement du composant
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const currentRef = searchRef.current as HTMLElement | null;
      if (
        currentRef &&
        currentRef.contains &&
        !currentRef.contains(event.target as Node)
      ) {
        setOpenCategory(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  },[])

  return (
    <>
      <header className="header2">
        <div
          className="header-note"
          style={{ display: open ? "block" : "none" }}
        >
          <p>
            Further reductionddds: enjoy an extra <span>20%</span> off our Sale and
            free home delivery
          </p>
          <span onClick={() => setOpen(!open)} className="note-close-btn">
            <i className="flaticon-cancel"></i>
          </span>
        </div>
        <div className="header-top d-none d-md-block">
          <div className="container header-container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="header-top-link">
                  <Link href="/about" className="text-btn">
                    A propos de Nous
                  </Link>
                  <Link href="/profile" className="text-btn">
                   Mon Compte
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="header-top-right">
                  <Link href="/track-order" className="text-btn">
                    Suivre Mon Ordre
                  </Link>
                  <NiceSelectTwo
                    options={language_data}
                    defaultCurrent={0}
                    onChange={selectHandler}
                    name="lan-select"
                    className="language-select border-left"
                  />
                  <NiceSelectTwo
                    options={currency_data}
                    defaultCurrent={0}
                    onChange={selectHandler}
                    name="currency-select"
                    className="currency-select border-left"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="header-sticky"
          className={`header-main header-main1 ${
            scrollDirection === "down" ? "sticky" : ""
          }`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12">
                <div className="header-main-content-wrapper">
                  <div className="header-main-left header-main-left-header1">
                    <div className="header-logo header1-logo">
                      <Link href="/" className="logo-bl">
                        <Image src={logoImg} alt="logo-img" />
                      </Link>
                    </div>
                    <div className="main-menu main-menu2 d-none d-lg-block">
                      <nav id="mobile-menu">
                        <Menu />
                      </nav>
                    </div>
                  </div>
                  <div className="header-main-right header-main-right-header1">
                    <div className="action-list d-none d-xl-flex action-list-header2">
                      <div className="action-item action-item-cart">
                        <button
                          type="button"
                          onClick={() => setSideCartOpen(!sideCartOpen)}
                          className="view-cart-button"
                        >
                          <i className="fal fa-shopping-bag"></i>
                          <span className="action-item-number">
                            {totalCart}
                          </span>
                        </button>
                      </div>
                      <div className="action-item action-item-wishlist">
                        <button
                          onClick={() => setSideWishlistOpen(!sideWishlistOpen)}
                          type="button"
                          className="view-wishlist-button"
                        >
                          <i className="fal fa-heart"></i>
                          <span className="action-item-number">
                            {totatWishlist}
                          </span>
                        </button>
                      </div>
                      {/* copmare */}
                      <div className="action-item action-item-wishlist">
                        <button
                          onClick={handleCompare}
                          type="button"
                          className="view-wishlist-button"
                        >
                          <i className="fal fa-exchange"></i>
                          <span className="action-item-number">
                            {totatCompare}
                          </span>
                        </button>
                      </div>
                      {/* copmare */}
                      <div className="user-btn">
                        <Link href="/login">
                          <div className="user-icon">
                            <i className="flaticon-avatar"></i>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="action-list d-xl-none d-md-flex action-list-header4">
                      <div
                        onClick={() => setSideCartOpen(!sideCartOpen)}
                        className="action-item action-item-cart"
                      >
                        <button type="button" className="view-cart-button">
                          <i className="fal fa-shopping-bag"></i>
                          <span className="action-item-number">
                            {totalCart}
                          </span>
                        </button>
                      </div>
                      <div
                        onClick={() => setSideWishlistOpen(!sideWishlistOpen)}
                        className="action-item action-item-wishlist"
                      >
                        <button type="button" className="view-wishlist-button">
                          <i className="fal fa-heart"></i>
                          <span className="action-item-number">
                            {totatWishlist}
                          </span>
                        </button>
                      </div>
                      <div className="action-item action-item-wishlist action-item-compare">
                        <button
                          onClick={handleCompare}
                          type="button"
                          className="view-wishlist-button"
                        >
                          <i className="fal fa-exchange"></i>
                          <span className="action-item-number">
                            {totatCompare}
                          </span>
                        </button>
                      </div> 
                    </div>
                    <div className="menu-bar ecomart-menu-bar d-xl-none ml-20">
                      <button
                        className="side-toggle"
                        onClick={toggleSideMenu}
                        type="button"
                      >
                        <div className="bar-icon">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom d-none d-lg-block">
          <div className="container">
            <div className="header-bottom-inner">
              <div ref={searchRef} className="category-menu pos-rel">
                <div
                  onClick={() => setOpenCategory(!openCategory)}
                  className={`category-click ${
                    openCategory ? "items-open" : ""
                  }`}
                >
                  <div className="bar-icon bar-icon-2">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span>Categories</span>
                </div>
                <div
                  className="category-items"
                  style={{ display: openCategory ? "block" : "none" }}
                >
                 {categories.map((category: any) => (
    <Link key={category.id} href={`/category/${category.slug}`} className="category-item">
        <div className="category-name">{category.name}</div>{" "}
        {/* You can also display the number of articles for each category if necessary */}
    </Link>
))}

                </div>
              </div>
              <SearchHeaderOne />
              <div className="header-support-social">
                <div className="irc-item footer-support header-bottom-support">
                  <div className="irc-item-icon">
                     <SupportIconWithHeadphone/>
                  </div>
                  <div className="irc-item-content">
                    <div className="support-number">
                      <Link href="tel:555-900-888">+212610868038</Link>
                    </div>
                    <p>24/7 Support Center</p>
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
        </div>
      </header>
    </>
  );
};

export default HeaderOne;
