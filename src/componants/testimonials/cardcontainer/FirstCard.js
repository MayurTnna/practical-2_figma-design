import React from "react";
import "../cardcontainer/FirstCard.scss";
import person1 from "../../../assets/images/person1.svg";
import star from "../../../assets/images/star.svg";
import halfstar from "../../../assets/images/halfstar.svg";

const FirstCard = () => {
  return (
    <>
      <div className="main-card-container">
        <div className="main-image-container">
          <div className="white-bg">
            <img src={person1} alt="person1" className="person1" />
            <div className="main-name">Bang Upin</div>
            <div className="main-subtitle">Pedagang Asongan</div>
            <div className="main-description">
              “Terimakasih banyak, kini ruanganku menjadi lebih mewah dan
              terlihat mahal“
            </div>
            <div className="d-flex justify-content-center star-container">
              <img src={star} alt="not star"  className="px-1" />
              <img src={star} alt="not star" className="px-1" />
              <img src={star} alt="not star" className="px-1" />
              <img src={star} alt="not star" className="px-1" />
              <img src={halfstar} alt="not star" className="px-1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstCard;
