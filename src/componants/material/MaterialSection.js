import React from "react";
import yellowArrow from "../../assets/images/yellow-arrow.svg";
import "../material/MaterialSection.scss";
import leftmaingroup from "../../assets/images/material-left-group.svg";
function MaterialSection() {
  return (
    <>
      <div className="material-main-container">
        <div className="container-fluid">
          <div className="row">
            <div className=" col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
              <div className="left-container">
                <div className="main-title">Materials</div>
                <div className="main-subtitle">
                  Very serious materials for making furniture
                </div>
                <div className="main-description">
                  Because panto was very serious about designing furniture for
                  our environment, using a very expensive and famous capital but
                  at a relatively low price
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
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <img src={leftmaingroup} alt="" className="img-fluid" />
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default MaterialSection;
