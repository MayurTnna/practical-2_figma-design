import React from "react";
import "../hero/HeroSection.scss";
import Header from "../common/Header/Header";
import searchicon from "../../assets/images/search-button.svg";

function HeroSection() {
  return (
    <>
      <div className="hero-main-container">
        <Header />
        <div className="hero-main-title">
          <p className="hero-title">
            Make your interior more minimalistic & modern
          </p>
        </div>
        <div className="hero-main-subtitle">
          <p className="hero-subtitle">
            Turn your room with panto into a lot more minimalist and modern with
            ease and speed
          </p>
        </div>
        <div className="search-main-container">
          <div className="search-main-input">
            <input
              className="main-input1"
              type="text"
              placeholder="search furniture"
            />
            <img src={searchicon} alt="search-icon" className="search-icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
