import React from "react";
import { NavLink } from "react-router-dom";
import BannerBG from './../../images/about-img.jpg'
import './Banner.css'
const Banner = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 text-white banner-half-bg padding-resize d-flex justify-content-center align-items-center">
            <div>
            <h5 className="text-center">OUR, MEDICAL SITE</h5>
            <h1 className="text-center main-heading">Best Medical <br /> Health Care <br />
             Center</h1>
            <p className="text-center">
            Join us for another month of doing good together as we dedicate  <br />and to helping our partners in Romania provide and plan   <br />services in the communities they serve. #rufmindyourhealth
 
            </p>
           <div className="text-center">
           <NavLink to="/services">
           <button className="show-off">Service</button>
           </NavLink>
           </div>
            </div>
          </div>
          <div className="col-md-6 padding-resize">
              <img className="img-fluid" src={BannerBG} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
