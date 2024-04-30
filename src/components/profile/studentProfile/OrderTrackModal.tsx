"use client";

const OrderTrackModal = () => {
  return (
    <>
      <div
        className="product__modal-sm modal fade"
        id="orderTrackModal"
        //   tabIndex="-1"
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
                <div className="modal__inner d-flex">
                  <div className="table-responsive">
                    <div>
                      <div className="list-steps">
                        <div className="item-step line-active">
                          <div className="rounded-step">
                            <div className="icon-step step-1 active"></div>
                            <h6 className="mb-1"> Order Placed </h6>
                            <p className="font-md color-gray-500">
                              {" "}
                              27 Dec 1.23 PM
                            </p>
                          </div>
                        </div>
                        <div className="item-step line-active">
                          <div className="rounded-step">
                            <div className="icon-step step-2 active"></div>
                            <h6 className="mb-1"> In Production </h6>
                            <p className="font-md color-gray-500">
                              {" "}
                              18 Feb 9.46 AM
                            </p>
                          </div>
                        </div>
                        <div className="item-step line-active">
                          <div className="rounded-step">
                            <div className="icon-step step-3 active"></div>
                            <h6 className="mb-1"> Shipping </h6>
                            <p className="font-md color-gray-500">
                              {" "}
                              18 Feb 9.46 AM
                            </p>
                          </div>
                        </div>
                        <div className="item-step item-step-complete line-active">
                          <div className="rounded-step">
                            <div className="icon-step step-4 active"></div>
                            <h6 className="mb-1"> Delivered </h6>
                            <p className="font-md color-gray-500">
                              {" "}
                              18 Feb 9.46 AM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default OrderTrackModal;
