import React from "react";

const SizeGuide = () => {
  return (
    <>
      <div
        className="product__modal-sm modal fade"
        id="sizeguide"
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
                  <h2 className="text-center">Size Guide</h2>
                  <div className="table-responsive">
                    <table className="table table-striped table-borderless text-center">
                      <thead>
                        <tr>
                          <th>USA</th>
                          <th>UK</th>
                          <th>France</th>
                          <th>Japanese</th>
                          <th>Bust</th>
                          <th>Waist</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>4</td>
                          <td>8</td>
                          <td>36</td>
                          <td>7</td>
                          <td>{`32"`}</td>
                          <td>61 cm</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>10</td>
                          <td>38</td>
                          <td>11</td>
                          <td>{`34"`}</td>
                          <td>67 cm</td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>12</td>
                          <td>40</td>
                          <td>15</td>
                          <td>{`36"`}</td>
                          <td>74 cm</td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>14</td>
                          <td>42</td>
                          <td>17</td>
                          <td>{`38"`}</td>
                          <td>79 cm</td>
                        </tr>
                        <tr>
                          <td>12</td>
                          <td>16</td>
                          <td>44</td>
                          <td>21</td>
                          <td>{`40"`}</td>
                          <td>84 cm</td>
                        </tr>
                      </tbody>
                    </table>
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

export default SizeGuide;
