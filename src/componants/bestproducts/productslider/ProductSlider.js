import React from "react";
import "../productslider/productSlider.scss";
import chair1 from "../../../assets/images/chair1.svg";
import star from "../../../assets/images/star.svg";
import plus from "../../../assets/images/plus.svg";

const ProductSlider = () => {
  return (
    <>
      <div className="main-card-container">
        <div className="card-background">
          <img src={chair1} alt="chair1" className="chair-image" />
        </div>
        <div className="main-product-text">
          <div className="product-text-div">
            <div className="chair">Chair</div>
            <div className="chair-title">Sakarias Armchair</div>
            <div className="stars-grp d-flex">
              <img src={star} alt="star" />
              <img src={star} alt="star" className="px-1" />
              <img src={star} alt="star" className="px-1" />
              <img src={star} alt="star" className="px-1" />
              <img src={star} alt="star" className="px-1" />
            </div>
            <div className="price-container">
              <div className="price-text">
                <span className="dollar">$</span>
                <span className="chair-title">392</span>
              </div>
              <div className="plus-image ">
                <img src={plus} alt="plus" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSlider;
