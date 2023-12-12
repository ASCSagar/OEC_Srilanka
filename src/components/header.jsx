import React from "react";
import slide1 from "../assets/Cover Image/OEC1.jpg";
import slide2 from "../assets/Cover Image/OEC2.jpg";
import slide3 from "../assets/Cover Image/OEC3.jpg";
import slide4 from "../assets/Cover Image/OECStudent1.jpg";
import slide5 from "../assets/Cover Image/OECStudent2.jpg";
import slide6 from "../assets/Cover Image/OECStudent3.jpg";
import slide7 from "../assets/Cover Image/OECStudent4.jpg";
import slide8 from "../assets/Cover Image/OECStudent5.jpg";
import slideM1 from "../assets/Square Image/OECSocial1.jpg";
import slideM2 from "../assets/Square Image/OECSocial2.jpg";
import slideM3 from "../assets/Square Image/OECSocial3.jpg";
import slideM4 from "../assets/Square Image/OEC_Student1.jpg";
import slideM5 from "../assets/Square Image/OEC_Student2.jpg";
import slideM6 from "../assets/Square Image/OEC_Student3.jpg";
import slideM7 from "../assets/Square Image/OEC_Student4.jpg";
import slideM8 from "../assets/Square Image/OEC_Student5.jpg";

const Header = (props) => {
  const isMobile = window.innerWidth < 769;
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="row">
            <div className="col-md-12">
              <div
                id="myCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to="0"
                    className="active slider-dots"
                  ></li>
                  <li
                    className="slider-dots"
                    data-target="#myCarousel"
                    data-slide-to="1"
                  ></li>
                  <li
                    className="slider-dots"
                    data-target="#myCarousel"
                    data-slide-to="2"
                  ></li>
                  <li
                    className="slider-dots"
                    data-target="#myCarousel"
                    data-slide-to="3"
                  ></li>
                  <li
                    className="slider-dots"
                    data-target="#myCarousel"
                    data-slide-to="4"
                  ></li>
                  <li
                    className="slider-dots"
                    data-target="#myCarousel"
                    data-slide-to="5"
                  ></li>
                  <li
                    className="slider-dots"
                    data-target="#myCarousel"
                    data-slide-to="6"
                  ></li>
                  <li
                    className="slider-dots"
                    data-target="#myCarousel"
                    data-slide-to="7"
                  ></li>
                </ol>
                <div className="carousel-inner">
                  <div className="item active">
                    <img
                      src={isMobile ? slideM1 : slide1}
                      alt="Study in UK banner"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={isMobile ? slideM4 : slide4}
                      alt="Study in UK banner"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={isMobile ? slideM2 : slide2}
                      alt="Study in UK banner"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={isMobile ? slideM5 : slide5}
                      alt="Study in UK banner"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={isMobile ? slideM3 : slide3}
                      alt="Study in UK banner"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={isMobile ? slideM6 : slide6}
                      alt="Study in UK banner"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={isMobile ? slideM7 : slide7}
                      alt="Study in UK banner"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={isMobile ? slideM8 : slide8}
                      alt="Study in UK banner"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <a
                  className="left carousel-control"
                  href="#myCarousel"
                  data-slide="prev"
                >
                  <span className="fa fa-chevron-left"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="right carousel-control"
                  href="#myCarousel"
                  data-slide="next"
                >
                  <span className="fa fa-chevron-right"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              {/* <img
                className="banner-img"
                src="https://oecdubai.com/oecuk/assets/images/slide1.webp"
                alt="OEC Banner "
              /> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
