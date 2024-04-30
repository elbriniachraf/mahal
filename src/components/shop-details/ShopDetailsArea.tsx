"use client";
import { products_data } from "@/data/products-data";
import { ProductColor, ProductsType, idType } from "@/interFace/interFace";
import Image, { StaticImageData } from "next/image";
import ReactImageMagnify from "react-image-magnify";
import Link from "next/link";
import React, { useState } from "react";
import reviewOne from "../../../public/assets/img/testimonial/course-reviews-1.png";
import reviewTwo from "../../../public/assets/img/testimonial/course-reviews-2.png";
import reviewThree from "../../../public/assets/img/testimonial/course-reviews-3.png";
import { cart_product, decrease_quantity } from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { FreeMode, Thumbs, Controller, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import ProductInfo from "./ProductInfo";
import GetRatting from "@/hooks/GetRatting";
import ModalVideo from "react-modal-video";
import TimerWrapper from "@/utils/TimerWrapper";
import { getColorClass } from "@/hooks/condition-class";
import ReviewForm from "@/form/ReviewForm";
const ShopDetailsArea = ({ id }: idType) => {
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();
  const item = products_data?.find((itm) => itm.id == id) as ProductsType;
  const [sizeNumber, setSizeNumber] = useState<number>(0);
  const [size, setSize] = useState<string>(item?.sizeArray?.[0] as string);
  // normal img selection
  const [productImg, setProductImg] = useState<StaticImageData>();
  // select img for show on cart
  const [cartProductImg, setcartProductImg] = useState<StaticImageData>();
  const [colorName, setColorName] = useState<string>("");
  const [activeBorder, setactiveBorder] = useState(0);
  const [activeColorBorder, setactiveColorBorder] = useState(0);
  const [startSlice, setstartSlice] = useState(0);
  const [endSlice, setendSlice] = useState(1);

  const handleImg = (props: any, index: number) => {
    setProductImg(props.productImg);

    setactiveBorder(index);
  };
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );
  const quantity = cartProducts.find((itm) => itm?.id === item?.id);
  const totalCart = quantity?.totalCart ? quantity?.totalCart : 0;

  const handleActiveSize = (itm: string, id: number) => {
    setSizeNumber(id);
    setSize(itm);
  };

  const handleAddToCart = (item: ProductsType) => {
    const newCardProduct = { ...item };
    newCardProduct.sizeArray = [size];
    newCardProduct.productImg = cartProductImg
      ? cartProductImg
      : item?.productImg;
    newCardProduct.primaryColor = colorName ? colorName : item?.primaryColor;
    dispatch(cart_product(newCardProduct));
  };

  const handlecolorMainImg = (colorItems: ProductColor, index: number) => {
    setColorName(colorItems?.color);
    setProductImg(colorItems?.activeImg);
    setcartProductImg(colorItems?.activeImg);
    setstartSlice(index);
    setendSlice(index + 1);
    setactiveBorder(0);
    setactiveColorBorder(index);
  };

  //

  return (
    <>
      <section className="shop-details-area pt-120 pb-90">
        <div className="container container-small">
          <div className="row">
            <div className="col-lg-6">
              <div className="product-details-tab-wrapper mb-30">
                <div className="product-details-tab">
                  <div className="tab-content" id="productDetailsTab">
                    {item?.productColor === true ? (
                      <>
                        {item?.productColorArray?.length ? (
                          <>
                            {item?.productColorArray?.map(
                              (colorProduct, index) => (
                                <div
                                  key={index}
                                  className={`tab-pane fade prodcut_bg p-relative ${
                                    index === 0 ? "active show" : ""
                                  }`}
                                  id={colorProduct?.color}
                                  role="tabpanel"
                                  aria-labelledby={`${colorProduct?.color}-tab`}
                                >
                                  <div className="ecomart-img-wrap">
                                    <Image
                                      className="active"
                                      src={
                                        productImg
                                          ? productImg
                                          : item?.productImg
                                      }
                                      alt="product-img"
                                    />
                                  </div>
                                  <div className="ecomart-zoom-img-wrapper">
                                    <div className="text-center">
                                      <div className="ecomart-magnify-img-wrap">
                                        <ReactImageMagnify
                                          smallImage={{
                                            alt: "Wristwatch by Ted Baker London",
                                            isFluidWidth: true,
                                            src: productImg
                                              ? productImg.src
                                              : item?.productImg.src,
                                          }}
                                          largeImage={{
                                            src: productImg
                                              ? productImg.src
                                              : item?.productImg.src,
                                            width: 1200,
                                            height: 1800,
                                          }}
                                          lensStyle={{
                                            backgroundColor:
                                              "rgba(0, 0, 0, 0.434)",
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  {item?.productVideo && activeBorder === 2 ? (
                                    <>
                                      <ModalVideo
                                        channel="youtube"
                                        isOpen={isOpen}
                                        videoId={item?.productVideo as string}
                                        onClose={() => {
                                          openVideoModal();
                                        }}
                                      />
                                      <div className="product_video">
                                        <button
                                          onClick={() => {
                                            openVideoModal();
                                          }}
                                          type="button"
                                        >
                                          <i className="fa-light fa-circle-play"></i>
                                        </button>
                                      </div>
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              )
                            )}
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    ) : (
                      <>
                        <div
                          className="tab-pane fade active prodcut_bg show"
                          id="pro-1"
                          role="tabpanel"
                          aria-labelledby="pro-1-tab"
                        >
                          <div className="ecomart-img-wrap">
                            <Image
                              className="active"
                              src={item?.productImg}
                              alt="product-img"
                            />
                          </div>
                          <div className="ecomart-zoom-img-wrapper">
                            <div className="text-center">
                              <div className="ecomart-magnify-img-wrap">
                                <ReactImageMagnify
                                  smallImage={{
                                    alt: "Wristwatch by Ted Baker London",
                                    isFluidWidth: true,
                                    src: item?.productImg.src,
                                  }}
                                  largeImage={{
                                    src: item?.productImg.src,
                                    width: 1200,
                                    height: 1800,
                                  }}
                                  lensStyle={{
                                    backgroundColor: "rgba(0, 0, 0, 0.434)",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="product-details-nav ecomart-shop-details-nav">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    {item?.productColorArray?.length &&
                    item?.productColorArray?.length > 4 ? (
                      <>
                        <div className="product-tab-slider-nav details_product_prev">
                          <div className="product-tab-slider-button-prev">
                            <i className="fal fa-long-arrow-left"></i>
                          </div>
                          <div className="product-tab-slider-button-next">
                            <i className="fal fa-long-arrow-right"></i>
                          </div>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                    {item?.angleView === true ? (
                      <>
                        {item?.productColorArray?.length &&
                          item?.productColorArray
                            ?.slice(startSlice, endSlice)
                            ?.map((itm, indx) => (
                              <div key={indx}>
                                {itm?.angleViewProducts?.length &&
                                itm?.angleViewProducts?.length > 4 ? (
                                  <>
                                    <div className="product-tab-slider-nav details_product_prev">
                                      <div className="product-tab-slider-button-prev">
                                        <i className="fal fa-long-arrow-left"></i>
                                      </div>
                                      <div className="product-tab-slider-button-next">
                                        <i className="fal fa-long-arrow-right"></i>
                                      </div>
                                    </div>
                                  </>
                                ) : (
                                  <></>
                                )}
                              </div>
                            ))}
                      </>
                    ) : (
                      <></>
                    )}
                    {/* arrow icon */}

                    {/* product angle view with multiple color */}
                    {item?.angleView === true ? (
                      <>
                        {item?.productColorArray?.length &&
                          item?.productColorArray
                            ?.slice(startSlice, endSlice)
                            ?.map((itm, indx) => (
                              <Swiper
                                key={indx}
                                loop={true}
                                spaceBetween={5}
                                slidesPerView={Math.min(
                                  itm?.angleViewProducts?.length as number,
                                  4
                                )}
                                modules={[
                                  Controller,
                                  FreeMode,
                                  Thumbs,
                                  Navigation,
                                ]}
                                navigation={{
                                  nextEl: ".product-tab-slider-button-prev",
                                  prevEl: ".product-tab-slider-button-next",
                                }}
                                watchSlidesProgress={false}
                              >
                                {itm?.angleViewProducts?.map(
                                  (colorProduct, index) => (
                                    <SwiperSlide key={index}>
                                      <li
                                        className="nav-item"
                                        role="presentation"
                                      >
                                        <button
                                          onClick={() =>
                                            handleImg(colorProduct, index)
                                          }
                                          className={`nav-link preview_img preview_img_slider ${
                                            index === activeBorder
                                              ? "active"
                                              : ""
                                          }`}
                                          type="button"
                                          role="tab"
                                        >
                                          <Image
                                            className="prodcut_bg"
                                            style={{
                                              width: "100%",
                                              height: "auto",
                                            }}
                                            src={colorProduct.productImg}
                                            alt="..."
                                          />
                                          {item?.productVideo &&
                                            index === 2 && (
                                              <i
                                                onClick={() => {
                                                  openVideoModal();
                                                }}
                                                className="fa-light fa-circle-play"
                                              ></i>
                                            )}
                                        </button>
                                      </li>
                                    </SwiperSlide>
                                  )
                                )}
                              </Swiper>
                            ))}
                      </>
                    ) : (
                      <></>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="product-side-info mb-30">
                <h4 className="product-name mb-10">{item?.title}</h4>
                <span className="product-price mr-1">${item?.price}.00</span>
                {item?.oldPrice ? (
                  <>
                    <span className="price-old">£{item?.oldPrice}.00</span>{" "}
                    <span className="save_message">
                      You Save ${item?.oldPrice - item?.price} ({item?.discount}
                      %)
                    </span>
                  </>
                ) : (
                  <></>
                )}

                <div className="product-ratting">
                  <ul>
                    <GetRatting averageRating={item?.rating} /> 150 Ratings | 35
                    Reviews
                  </ul>
                </div>

                <div className="prodcut_category_brand mt-30">
                  <ul>
                    <li>
                      {" "}
                      Brand:{" "}
                      <span className="text-success">{item?.brand},</span>{" "}
                      Category:{" "}
                      <span className="text-success">{item?.category}</span>{" "}
                    </li>
                  </ul>
                </div>

                {item?.discount ? (
                  <>
                    <div className="offer_coutdown">
                      <div className="mr-10">
                        <span className="text-bold">Ends In : </span>
                      </div>

                      <TimerWrapper />
                    </div>
                  </>
                ) : (
                  <></>
                )}
                <p className="mb-30">
                  Matent maecenas nec massa viverra aci ute litora aliquam
                  habitant proin commodo bibendum rutru habitant est magnis
                  quisque aliquet congue vesti bulum suscipi erose tellus odio
                  elite purus feugiat prim libero senes nisie gravia
                </p>
                {item?.totalProduct && item?.totalProduct > 0 ? (
                  <>
                    <div className="available-sizes">
                      <span>Select Sizes : </span>
                      <div className="product-available-sizes">
                        {item?.sizeArray?.map((itm, index) => (
                          <button
                            onClick={() => handleActiveSize(itm, index)}
                            className={
                              sizeNumber === index ? "active_size" : ""
                            }
                            type="button"
                            key={index}
                          >
                            {itm}
                          </button>
                        ))}
                      </div>
                    </div>

                    {item?.productColor === true ? (
                      <>
                        <div className="d-flex flex-wrap align-items-center mb-30">
                          <div className="mr-5">
                            <span>Select Colors :</span>
                          </div>
                          <div>
                            <ul className="product-color-nav">
                              {item?.productColorArray?.map(
                                (colorItems, index) => {
                                  const dynamicColor = getColorClass(
                                    colorItems.color
                                  );
                                  return (
                                    <li title={colorItems.color}
                                      onClick={() =>
                                        handlecolorMainImg(colorItems, index)
                                      }
                                      key={index}
                                      className={`${dynamicColor} ${
                                        activeColorBorder === index
                                          ? "active"
                                          : ""
                                      }`}
                                    >
                                      <Image
                                        src={colorItems.activeImg}
                                        alt="img"
                                      />
                                    </li>
                                  
                                  );
                                }
                              )}
                            </ul>
                          </div>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    <div className="product-quantity-cart mb-25">
                      <div className="product-quantity-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                          <button
                            onClick={() => dispatch(decrease_quantity(item))}
                            className="cart-minus"
                          >
                            <i className="far fa-minus"></i>
                          </button>
                          <input
                            className="cart-input"
                            type="text"
                            readOnly
                            value={totalCart ? totalCart : 0}
                          />
                          <button
                            onClick={() => handleAddToCart(item)}
                            className="cart-plus"
                          >
                            <i className="far fa-plus"></i>
                          </button>
                        </form>
                      </div>
                      <button
                        className="fill-btn"
                        onClick={() => handleAddToCart(item)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </>
                ) : (
                  <></>
                )}
                <div>
                  {item?.totalProduct && item?.totalProduct > 0 ? (
                    <>
                      <p>
                        {item?.totalProduct && item?.totalProduct > 1
                          ? `${item?.totalProduct} Pieces Available`
                          : `${item?.totalProduct} Piece Available`}
                      </p>
                    </>
                  ) : (
                    <>
                      {" "}
                      <p className="text-danger">
                        This Product Is Out Of Stock
                      </p>{" "}
                    </>
                  )}
                </div>

                {item?.productColorArray?.length ? (
                  <>
                    <div className="product__details__tag tagcloud mt-25 mb-10">
                      <span>Variation : </span>

                      {item?.productColorArray?.map((color, index) => (
                        <Link key={index} href="#" rel="tag">
                          {color.color}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <></>
                )}

                <ProductInfo />
              </div>
            </div>
          </div>

          <div className="product_info-faq-area pb-0">
            <div className="">
              <nav className="product-details-nav">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <Link
                    className="nav-item nav-link show"
                    id="nav-general-tab"
                    data-bs-toggle="tab"
                    href="#nav-general"
                    role="tab"
                    aria-selected="false"
                  >
                    Description
                  </Link>
                  <Link
                    className="nav-item nav-link active"
                    id="nav-seller-tab"
                    data-bs-toggle="tab"
                    href="#nav-seller"
                    role="tab"
                    aria-selected="true"
                  >
                    Reviews
                  </Link>
                  <Link
                    className="nav-item nav-link"
                    id="spacification-tab"
                    data-bs-toggle="tab"
                    href="#spacification"
                    role="tab"
                    aria-selected="true"
                  >
                    Specification
                  </Link>
                </div>
              </nav>
              <div
                className="tab-content product-details-content"
                id="nav-tabContent"
              >
                <div className="tab-pane fade" id="nav-general" role="tabpanel">
                  <div className="tabs-wrapper mt-35">
                    <div className="product__details-des">
                      <p>
                        Very clean and organized with easy to follow tutorials,
                        Exercises, and solutions. This course does start from
                        the beginning with very little knowledge and gives a
                        great overview of common tools used for data science and
                        progresses into more complex concepts and ideas. This
                        course is amazing..! I started this course as a beginner
                        and learnt a lot. Instructors are great. Query handling
                        can be improved.Overall very happy with the course.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade active show"
                  id="nav-seller"
                  role="tabpanel"
                >
                  <div className="tabs-wrapper mt-35">
                    <div className="course-review-item mb-30">
                      <div className="course-reviews-img">
                        <Link href="#">
                          <Image src={reviewOne} alt="image not found" />
                        </Link>
                      </div>
                      <div className="course-review-list">
                        <h5>
                          <Link href="#">Sotapdi Kunda</Link>
                        </h5>
                        <div className="course-start-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>55 min ago</span>
                        </div>
                        <p>
                          Very clean and organized with easy to follow
                          tutorials, Exercises, and solutions. This course does
                          start from the beginning with very little knowledge
                          and gives a great overview of common tools used for
                          data science and progresses into more complex concepts
                          and ideas.
                        </p>
                      </div>
                    </div>
                    <div className="course-review-item mb-30">
                      <div className="course-reviews-img">
                        <Link href="#">
                          <Image src={reviewTwo} alt="image not found" />
                        </Link>
                      </div>
                      <div className="course-review-list">
                        <h5>
                          <Link href="#">Samantha</Link>
                        </h5>
                        <div className="course-start-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>45 min ago</span>
                        </div>
                        <p>
                          The course is good at explaining very basic intuition
                          of the concepts. It will get you scratching the
                          surface so to say. where this course is unique is the
                          implementation methods are so well defined Thank you
                          to the team !.
                        </p>
                      </div>
                    </div>
                    <div className="course-review-item mb-30">
                      <div className="course-reviews-img">
                        <Link href="#">
                          <Image src={reviewThree} alt="image not found" />
                        </Link>
                      </div>
                      <div className="course-review-list">
                        <h5>
                          <Link href="#">Michell Mariya</Link>
                        </h5>
                        <div className="course-start-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>30 min ago</span>
                        </div>
                        <p>
                          This course is amazing..! I started this course as a
                          beginner and learnt a lot. Instructors are great.
                          Query handling can be improved.Overall very happy with
                          the course.
                        </p>
                      </div>
                    </div>
                    <div className="product__details-comment ">
                      <div className="comment-title mb-20">
                        <h3>Add a review</h3>
                        <p>
                          Your email address will not be published. Required
                          fields are marked *
                        </p>
                      </div>
                      <div className="comment-rating mb-20">
                        <span>Overall ratings</span>
                        <ul>
                          <li>
                            <Link href="#">
                              <i className="fas fa-star"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fas fa-star"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fas fa-star"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fas fa-star"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fal fa-star"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="comment-input-box mb-20">
                        <ReviewForm />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="spacification"
                  role="tabpanel"
                >
                  {/*  */}
                  <table className="table mt-20">
                    <thead>
                      <tr>
                        <th>Field</th>
                        <th>Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Material</td>
                        <td>Cotton, Polyester</td>
                      </tr>
                      <tr>
                        <td>Size Options</td>
                        <td>XS, S, M, L, XL, XXL</td>
                      </tr>
                      <tr>
                        <td>Color Options</td>
                        <td>Various</td>
                      </tr>
                      <tr>
                        <td>Fit/Style</td>
                        <td>Slim fit, Regular fit, etc.</td>
                      </tr>
                      <tr>
                        <td>Design/Pattern</td>
                        <td>Solid color, Striped, etc.</td>
                      </tr>
                      <tr>
                        <td>Occasion</td>
                        <td>Casual, Formal, etc.</td>
                      </tr>
                      <tr>
                        <td>Features</td>
                        <td>With pockets, etc.</td>
                      </tr>
                      <tr>
                        <td>Additional Info</td>
                        <td>-</td>
                      </tr>
                    </tbody>
                  </table>
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopDetailsArea;
