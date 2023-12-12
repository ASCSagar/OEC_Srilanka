import React from "react";
import AboutLeft from "./about-left";

export const About = (props) => {
  return (
    <>
      <div id="about" className="about-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                class="about-image text-center mb-30"
                data-wow-duration="1.5s"
                data-wow-offset="100"
              >
                <img
                  src="https://oecindia.com/oecuk/assets/images/UK.gif"
                  alt="services"
                  width="150px"
                />
              </div>
            </div>
            <div className="col-xs-12 col-md-12 mb-30 about-left">
              <AboutLeft />
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xs-12 col-md-12 about-right">
          <div className="about-text">
            <h3>Why OEC</h3>
            <div className="aboutwrapper">
              <ul>
                <li>
                  <i className="about-li-i fa fa-check-circle-o"></i>Pioneers in
                  World Education since 20 years
                </li>
                <li>
                  <i className="about-li-i fa fa-check-circle-o"></i>
                  More than 15,000 students placed at the best universities
                  across the world
                </li>
                <li>
                  <i className="about-li-i fa fa-check-circle-o"></i>Free
                  Application and Admission Assistance
                </li>
                <li>
                  <i className="about-li-i fa fa-check-circle-o"></i>
                  Offices in Vadodara/ Ahmedabad / Hyderabad/ Mumbai/ Pune /
                  Sri-lanka/ Dubai
                </li>
                <li>
                  <i className="about-li-i fa fa-check-circle-o"></i>Affiliated
                  with more than 500 universities worldwide
                </li>
                <li>
                  <i className="about-li-i fa fa-check-circle-o"></i>
                  Dedicated Team of about 30 Experts with years of experience
                  and Industry knowledge
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
