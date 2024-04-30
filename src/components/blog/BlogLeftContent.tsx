import blog_data from "@/data/blog-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogLeftContent = () => {
  return (
    <>
      <div className="col-xl-8 col-lg-12">
        <div className="blog-main-wrapper mb-30">
          <div className="row">
            {blog_data?.map((item) => (
              <div key={item?.id} className="col-xl-12 col-lg-6 col-md-12">
                <div className="blog-wrapper position-relative mb-30">
                  <div className="blog-thumb ">
                    <Link href={`/blog-details/${item?.id}`}>
                      <Image
                        style={{ width: "100%", height: "auto" }}
                        src={item?.blogImg}
                        alt="blog-img"
                      />
                    </Link>
                  </div>
                  <div className="blog-content-wrapper">
                    <div className="blog-meta">
                      <div className="blog-date">
                        <i className="flaticon-calendar"></i>
                        <span> {item?.date} </span>
                      </div>
                      <div className="blog-user">
                        <i className="flaticon-avatar"></i>
                        <span>Mark Hanry</span>
                      </div>
                    </div>
                    <div className="blog-content">
                      <Link href={`/blog-details/${item?.id}`}>
                        <h3> {item?.title} </h3>
                      </Link>
                      <p>
                        Entrepreneurs and go-getters often feel as if they carry
                        the weight of an entire organization on their backs, and
                        therefore could always use a little extra motivation.
                        Everyone must work, but for many of us that job isn’t
                        just a paycheck, it’s an opportunity to express
                        ourselves and make ...{" "}
                      </p>
                      <Link className="blog-btn" href={`/blog-details/${item?.id}`}>
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="common-pagination mt-30 mb-20">
            <ul>
              <li>
                <Link href="#">
                  <i className="fal fa-angle-left"></i>
                </Link>
              </li>
              <li className="active">
                <Link href="#">
                  <span>01</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span>02</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fal fa-angle-right"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogLeftContent;
