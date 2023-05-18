import React from "react";
import yellowArrow from "../../assets/images/yellow-arrow.svg";
import "../material/MaterialSection.scss";
import leftmaterial1 from "../../assets/images/left-material1.svg";
import leftmaterial2 from "../../assets/images/left-material2.svg";
import leftmaterial3 from "../../assets/images/left-material3.svg";
import leftexperienceshadow from "../../assets/images/leftexperienceshadow.svg";
function MaterialSection() {
  return (
    <>
      <div className="material-main-container">
        <div className="row">
          <div className=" col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
            <div className="left-container">
              <div className="main-title">Materials</div>
              <div className="main-subtitle">
                Very serious materials for making furniture
              </div>
              <div className="main-description">
                Because panto was very serious about designing furniture for our
                environment, using a very expensive and famous capital but at a
                relatively low price
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
          <div className="col-xl-2">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 ">
                <div className="col-xl-12 img1">
                  <img src={leftmaterial1} alt="left1" />
                </div>
                <div className="col-xl-12">
                  <img src={leftmaterial2} alt="left1" />
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="col-xl-4 p-0">
            <div className="leftmain">
              <img src={leftmaterial3} alt="left3" />
              <img
                src={leftexperienceshadow}
                className="leftshadow"
                alt="leftexperienceshadow"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MaterialSection;
