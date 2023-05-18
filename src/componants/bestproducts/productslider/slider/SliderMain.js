import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../slider/SliderMain.scss";
import ProductSlider from "../ProductSlider";
import CustomArrow from "./CustomArrow";
import rightimage from "../../../../assets/images/rightarrow.svg";
import leftimage from "../../../../assets/images/leftarrow.svg";

const SliderMain = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <CustomArrow imageUrl={rightimage} />,
    prevArrow: <CustomArrow imageUrl={leftimage} />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container container">
      <Slider {...settings}>
        <div className="main-slider-container">
          <ProductSlider />
        </div>
        <div className="main-slider-container">
          <ProductSlider />
        </div>
        <div className="main-slider-container">
          <ProductSlider />
        </div>
        <div className="main-slider-container">
          <ProductSlider />
        </div>
        <div className="main-slider-container">
          <ProductSlider />
        </div>
        <div className="main-slider-container">
          <ProductSlider />
        </div>
        <div className="main-slider-container">
          <ProductSlider />
        </div>
      </Slider>
    </div>
  );
};

export default SliderMain;
