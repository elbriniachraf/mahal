import Link from "next/link";
import React from "react";
import bgImg from "../../../public/assets/img/bg/page-title-bg.jpg";

interface propsType {
  title: string;
}

const BreadCrumb = ({ title }: propsType) => {
  return (
    <>
      <section
        className="page-title-area"
        style={{ backgroundImage: `url(${bgImg.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-title-wrapper text-center">
                <h1 className="page-title mb-10">{title}</h1>
                <div className="breadcrumb-menu">
                  <nav
                    aria-label="Breadcrumbs"
                    className="breadcrumb-trail breadcrumbs"
                  >
                    <ul className="trail-items">
                      <li className="trail-item trail-begin">
                        <Link href="/">
                          <span>Home</span>
                        </Link>
                      </li>
                      <li className="trail-item trail-end">
                        <span>{title}</span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BreadCrumb;
