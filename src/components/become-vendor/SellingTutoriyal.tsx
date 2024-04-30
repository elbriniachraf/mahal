"use client";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const SellingTutoriyal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => setIsOpen(!isOpen);
  return (
    <>
      <section className="newsletter-area pt-0 pb-120">
        <div className="container container-small">
          <div className="newsletter-wrapper">
            <div className="newsletter-inner">
              <div className="newsletter-content">
                <div className="section-title text-center">
                  <h2 className="section-main-title mb-30">
                    How To Create Vendor Account ?
                  </h2>
                </div>
                <button
                  onClick={() => {
                    openVideoModal();
                  }}
                  className="border-btn"
                >
                  {" "}
                  <i className="fa-brands fa-youtube"></i> Watch Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="JdZTlGK--QQ"
        onClose={() => {
          openVideoModal();
        }}
      />
    </>
  );
};

export default SellingTutoriyal;
