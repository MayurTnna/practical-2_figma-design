import React from "react";
import "../chooseus/ChooseOption.scss";
import yellowArrow from "../../assets/images/yellow-arrow.svg";

const ChooseOption = () => {
  return (
    <>
      <div className="chooseoption-main-container">
        <div className="text-container">
          <div className="row">
            <div className=" col-xl-3 col-lg-12 ">
              <div className="choose-title">Why Choosing Us</div>
            </div>
            <div className=" col-xl-3 col-lg-4  col-12 d-flex flex-column">
              <div className="title-text">Luxury Facalities</div>
              <p className="subtitle-text m-0 ">
                The advantage of hiring a workspace with us is that givees you
                comfortable service and all-around facilities.
              </p>
              <div className="d-flex yellow-container">
                <p className="m-0 yellow-text ">More Info</p>
                <img
                  src={yellowArrow}
                  alt="yellowArrow"
                  className="yellowArrow"
                />
              </div>
            </div>
            <div className="col col-xl-3 col-lg-4  d-flex col-12 flex-column ">
              <div className="title-text">Affordable Price</div>
              <p className="subtitle-text m-0 ">
                You can get a workspace of the highst quality at an affordable
                price and still enjoy the facilities that are oly here.
              </p>
              <div className="d-flex yellow-container">
                <p className="m-0 yellow-text ">More Info</p>
                <img
                  src={yellowArrow}
                  alt="yellowArrow"
                  className="yellowArrow"
                />
              </div>
            </div>
            <div className=" col-xl-3 col-lg-4 col-12 d-flex flex-column ">
              <div className="title-text">Many Choices</div>
              <p className="subtitle-text m-0 ">
                We provide many unique work space choices so that you can choose
                the workspace to your liking.
              </p>
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

export default ChooseOption;
