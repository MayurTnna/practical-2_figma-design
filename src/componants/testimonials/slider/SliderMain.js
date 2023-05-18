import "../slider/SliderMain.scss";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../slider/SliderMain.scss";
import CustomArrow from "./CustomArrow";
import rightimage from "../../../assets/images/rightarrow.svg";
import leftimage from "../../../assets/images/leftarrow.svg";
import FirstCard from "../cardcontainer/FirstCard";

const SliderMain = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
          <FirstCard />
        </div>
        <div className="main-slider-container">
          <FirstCard />
        </div>
        <div className="main-slider-container">
          <FirstCard />
        </div>
        <div className="main-slider-container">
          <FirstCard />
        </div>
        <div className="main-slider-container">
          <FirstCard />
        </div>
        <div className="main-slider-container">
          <FirstCard />
        </div>
      </Slider>
    </div>
  );
};

export default SliderMain;
