import { BlogType } from "@/interFace/interFace";
import Image from "next/image";
import React from "react";
import defaultImg from "../../../public/assets/img/blog/b-4.jpg";
import memberImg1 from "../../../public/assets/img/member/member-img-01.png";
import memberImg2 from "../../../public/assets/img/member/member-img-02.png";
import memberImg4 from "../../../public/assets/img/member/member-img-04.png";
import BlogCommentForm from "@/form/BlogCommentForm";
import Link from "next/link";
interface propsType {
  item: BlogType;
}

const BlogDetailsLeft = ({ item }: propsType) => {
  return (
    <>
      <div className="col-xl-8 col-lg-12">
        <div className="blog-main-wrapper mb-0">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="blog-wrapper position-relative blog-details-wrapper mb-30">
                <div className="blog-thumb ">
                  <Image
                    style={{ width: "100%", height: "auto" }}
                    src={item?.blogImg}
                    alt="blog-img"
                  />
                </div>
                <div className="blog-content-wrapper">
                  <div className="blog-meta">
                    <div className="blog-date">
                      <i className="flaticon-calendar"></i>
                      <span> {item?.date} </span>
                    </div>
                    <div className="blog-user">
                      <i className="flaticon-avatar"></i>
                      <span>Ecomart</span>
                    </div>
                  </div>
                  <div className="blog-content">
                    <p>
                      When it comes to designing better links and sending better
                      emails, Slava Shestopalov has a few tips on how to improve
                      your website’s experience while accessibility in mind.
                      There are so many websites out there that have not
                      considered the overall usability of their visually
                      impaired users. The participants will get general ideas of
                      the land management system of business. Everyone must
                      work, but for many of us that job isn’t just a paycheck,
                      it’s an opportunity to express ourselves and make
                      something better. Entrepreneurs and go-getters often feel
                      as if they carry the weight of an entire organization on
                      their backs, and therefore could always use a little extra
                      motivation.
                    </p>
                    <blockquote>
                      <p>
                        Tosser argy-bargy mush loo at public school Elizabeth up
                        the duff buggered chinwag on your bike mate don’t get
                        shirty with me super, Jeffrey bobby Richard cheesed off
                        spend a penny a load of old tosh blag horse.
                      </p>
                      <p className="mb-0">
                        <cite>Ecomart</cite>
                      </p>
                    </blockquote>
                    <p>
                      Cheeky bugger cracking goal starkers lemon squeezy lost
                      the plot pardon me no biggie the BBC burke gosh boot so I
                      said wellies, zonked a load of old tosh bodge barmy skive
                      off he legged it morish spend a penny my good sir wind up
                      hunky-dory. Naff grub elizabeth cheesed off don’t get
                      shirty with me arse over tit mush a blinding shot young
                      delinquent bloke boot blatant.
                    </p>
                    <p>
                      <Image
                        style={{ width: "100%", height: "auto" }}
                        src={defaultImg}
                        alt="img"
                      />
                    </p>
                    <h4 className="mb-20">
                      Typography is the powerful element you will ever need
                    </h4>
                    <p>
                      The participants will get general ideas of the land
                      management system of business. Everyone must work, but for
                      many of us that job isn’t just a paycheck, it’s an
                      opportunity to express ourselves and make something
                      better. Entrepreneurs and go-getters often feel as if they
                      carry the weight of an entire organization on their backs,
                      and therefore could always use a little extra motivation.
                    </p>
                    <p>
                      When it comes to designing better links and sending better
                      emails, Slava Shestopalov has a few tips on how to improve
                      your website’s experience while accessibility in mind.
                      There are so many websites out there that have not
                      considered the overall usability of their visually
                      impaired users.
                    </p>
                    <div className="blog__details__tag tagcloud">
                      <span>Post Tags : </span>
                      <Link href="#" rel="tag">
                        Design
                      </Link>
                      <Link href="#" rel="tag">
                        Decoration
                      </Link>
                      <Link href="#" rel="tag">
                        Style
                      </Link>
                      <Link href="#" rel="tag">
                        Home
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="latest-comments mb-50 mt-50">
                  <h3>3 Comments</h3>
                  <ul>
                    <li>
                      <div className="comments-box">
                        <div className="comments-info d-flex">
                          <div className="comments-avatar mr-20">
                            <Image src={memberImg4} alt="img" />
                          </div>
                          <div className="avatar-name">
                            <h5>Eleanor Fant</h5>
                            <span className="post-meta"> July 14, 2022</span>
                          </div>
                        </div>
                        <div className="comments-text ml-65">
                          <p>
                            So I said lurgy dropped a clanger Jeffrey bugger
                            cuppa gosh David blatant have it, standard A bit of
                            {`how's`} your father my lady absolutely.
                          </p>
                          <div className="comments-replay">
                            <Link href="#">Reply</Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="children">
                      <div className="comments-box">
                        <div className="comments-info d-flex">
                          <div className="comments-avatar mr-20">
                            <Image src={memberImg1} alt="img" />
                          </div>
                          <div className="avatar-name">
                            <h5>Dominic</h5>
                            <span className="post-meta">April 16, 2022 </span>
                          </div>
                        </div>
                        <div className="comments-text ml-65">
                          <p>
                            David blatant have it, standard A bit of {`how's`}{" "}
                            your father my lady absolutely.
                          </p>
                          <div className="comments-replay">
                            <Link href="#">Reply</Link>
                          </div>
                        </div>
                      </div>
                      <ul>
                        <li className="children-2">
                          <div className="comments-box">
                            <div className="comments-info d-flex">
                              <div className="comments-avatar mr-20">
                                <Image src={memberImg2} alt="img" />
                              </div>
                              <div className="avatar-name">
                                <h5>Von Rails</h5>
                                <span className="post-meta">
                                  April 18, 2022{" "}
                                </span>
                              </div>
                            </div>
                            <div className="comments-text ml-65">
                              <p>
                                He nicked it get stuffed mate spend a penny
                                plastered.!
                              </p>
                              <div className="comments-replay">
                                <Link href="#">Reply</Link>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <div className="comments-box">
                        <div className="comments-info d-flex">
                          <div className="comments-avatar mr-20">
                            <Image src={memberImg4} alt="img" />
                          </div>
                          <div className="avatar-name">
                            <h5>Eleanor Fant</h5>
                            <span className="post-meta"> July 14, 2022</span>
                          </div>
                        </div>
                        <div className="comments-text ml-65">
                          <p>
                            So I said lurgy dropped a clanger Jeffrey bugger
                            cuppa gosh David blatant have it, standard A bit of
                            {`how's`} your father my lady absolutely.
                          </p>
                          <div className="comments-replay">
                            <Link href="#">Reply</Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="children">
                      <div className="comments-box">
                        <div className="comments-info d-flex">
                          <div className="comments-avatar mr-20">
                            <Image src={memberImg1} alt="img" />
                          </div>
                          <div className="avatar-name">
                            <h5>Dominic</h5>
                            <span className="post-meta">April 16, 2022 </span>
                          </div>
                        </div>
                        <div className="comments-text ml-65">
                          <p>
                            David blatant have it, standard A bit of {`how's`}{" "}
                            your father my lady absolutely.
                          </p>
                          <div className="comments-replay">
                            <Link href="#">Reply</Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="blog__comment">
                  <h3>Leave a Comment</h3>
                    <BlogCommentForm/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsLeft;
