import React from "react";
import "../footer/Footer.scss";
import instagram from "../../../assets/images/instagram.svg";
import facebook from "../../../assets/images/facebook.svg";
import twitter from "../../../assets/images/twitter.svg";

const Footer = () => {
  return (
    <>
      <div className="footer-main-container">
        <div className="footer-container">
          <div className="footer-div">
            <div className="row mx-auto my-4">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="panto">Panto</div>
                <div className="panto-description">
                  The advantage of hiring a workspace with us is that givees you
                  comfortable service and all-around facilities.
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 ">
                <div className="yellow-text">Services</div>
                <div className="email"> Email Marketing</div>
                <div className="campaigns">Campapigns</div>
                <div className="binding">Branding </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="yellow-text">Furniture</div>
                <div className="email"> Beds</div>
                <div className="campaigns">Chair</div>
                <div className="binding">All </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="yellow-text">Follow us</div>
                <div className="email">
                  <img src={facebook} alt="fb" />
                  &nbsp; Facebook
                </div>
                <div className="campaigns">
                  <img src={twitter} alt="fb" />
                  &nbsp; Twitter
                </div>
                <div className="binding">
                  <img src={instagram} alt="fb" />
                  &nbsp; instagram
                </div>
              </div>
            </div>
            <div className="copyright-main">
              <div className="copy-text">Copyright © 2021</div>
              <div className="terms-privacy d-flex">
                <div className="terms">Terms & Conditions</div>
                <div className="privacy mx-5">Privacy Policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
