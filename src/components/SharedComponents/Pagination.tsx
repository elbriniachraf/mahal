import React from "react";

const Pagination = () => {
  return (
    <>
      <div className="col-xxl-12">
        <div
          className="bd-basic__pagination d-flex justify-content-center mt-40 mb-45"
          data-wow-delay=".3s"
        >
          <nav>
            <ul>
              <li className="active">
                <a href="">01</a>
              </li>
              <li className="">
                <a href="">02</a>
              </li>
              <li className="">
                <a href="">03</a>
              </li>
              <li className="">
                <a href="">04</a>
              </li>
              <li className="">
                <a href="">05</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Pagination;
