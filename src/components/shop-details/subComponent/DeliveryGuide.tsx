import React from "react";

const DeliveryGuide = () => {
  return (
    <>
      <div
        className="product__modal-sm modal fade"
        id="delivery"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="product__modal">
              <div className="product__modal-wrapper p-relative">
                <button
                  type="button"
                  className="close product__modal-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fal fa-times"></i>
                </button>
                <div className="modal__inner">
                  <div>
                    <div className="modal-info-heading">
                      <div className="mb-1">
                        <i className="icon-delivery-1"></i>
                      </div>
                      <div className="modal_icon">
                      <i className="fa-regular fa-truck"></i>
                      </div>
                      <h2 className="text-center">Delivery and Return</h2>
                    </div>
                    <br />
                    <h5>Our parcel courier service</h5>
                    <p>
                      Ecomart is proud to offer an exceptional international
                      parcel shipping service. It is straightforward and very
                      easy to organise international parcel shipping. Our
                      customer service team works around the clock to make sure
                      that you receive high quality courier service from start
                      to finish.
                    </p>
                    <p>
                      Sending a parcel with us is simple. To start the process
                      you will first need to get a quote using our free online
                      quotation service. From this, you’ll be able to navigate
                      through the online form to book a collection date for your
                      parcel, selecting a shipping day suitable for you.
                    </p>
                    <br />
                    <h5>Shipping Time</h5>
                    <p>
                      The shipping time is based on the shipping method you
                      chose.
                      <br />
                      EMS takes about 5-10 working days for delivery.
                      <br />
                      DHL takes about 2-5 working days for delivery.
                      <br />
                      DPEX takes about 2-8 working days for delivery.
                      <br />
                      JCEX takes about 3-7 working days for delivery.
                      <br />
                      China Post Registered Mail takes 20-40 working days for
                      delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryGuide;
