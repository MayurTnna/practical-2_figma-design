import React from "react";
import "../bestproducts/ProductSection.scss";
import SliderMain from "./productslider/slider/SliderMain";
import yellowArrow from "../../assets/images/yellow-arrow.svg"

const ProductSection = () => {
  return (
    <>
      <div className="product-main-container">
        <div className="product-main-title">Best Selling Product</div>
        <div className="main-btn-div">
          <div
            className="btn-group btn-main-container "
            role="group"
            aria-label="Basic checkbox toggle button group"
          >
            <input
              type="checkbox"
              className="btn-check"
              id="btncheck1"
              autocomplete="off"
            />
            <label className="btn white-bg" htmlFor="btncheck1">
              Chair
            </label>
            <input
              type="checkbox"
              className="btn-check"
              id="btncheck1"
              autocomplete="off"
            />
            <label className="btn" htmlFor="btncheck1">
              Beds
            </label>

            <input
              type="checkbox"
              className="btn-check"
              id="btncheck2"
              autocomplete="off"
            />
            <label className="btn" htmlFor="btncheck2">
              Sofa
            </label>

            <input
              type="checkbox"
              className="btn-check"
              id="btncheck3"
              autocomplete="off"
            />
            <label className="btn " htmlFor="btncheck3">
              Lamp
            </label>
          </div>
        </div>
        <SliderMain />
        <div className=" d-flex yellow-container">
                <p className="m-0 yellow-text ">View More</p>
                <img
                  src={yellowArrow}
                  alt="yellowArrow"
                  className="yellowArrow"
                />
              </div>
      </div>
    </>
  );
};

export default ProductSection;
