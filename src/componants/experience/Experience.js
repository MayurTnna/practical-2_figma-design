import React from "react";
import "../experience/Experience.scss";
import leftshadow from "../../assets/images/shadowleft.svg";
import shadowup from "../../assets/images/shadowup.svg";
import yellowArrow from "../../assets/images/yellow-arrow.svg";

const Experience = () => {
  return (
    <>
      <div className="experience-main-container">
        <div className="row">
          <div className=" col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
            <div className="left-container">
              <img src={leftshadow} alt="leftshadow" className="shadow-left image-fluid" />{" "}
              <img src={shadowup} alt="shadowup" className="shadow-up image-fluid" />
            </div>
          </div>
          <div className=" col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
            <div className="right-container">
              <div className="main-title">experiences</div>
              <div className="main-subtitle">
                we provide you the best experience
              </div>
              <div className="main-description">
                You don’t have to worry about the result because all of these
                interiors are made by people who are professionals in their
                fields with an elegant and lucurious style and with premium
                quality materials
              </div>
              <div className="d-flex yellow-container">
                <p className="m-0 yellow-text ">More Info</p>
                <img
                  src={yellowArrow}
                  alt="yellowArrow"
                  className="yellowArrow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
