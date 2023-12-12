import React, { useState } from "react";

export const Navigation = (props) => {
  // const [menuStatus, setMenuStatus] = useState(false);
  // const setMobileMenu = () => {
  //   setMenuStatus((status) => !status);
  // };
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      {/*  */}
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            // className={`navbar-toggle  ${menuStatus ? "" : "collapsed"}`}
            // onClick={setMobileMenu}
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="nav-img-main page-scroll" href="#page-top">
            <img
              className="navbar-logo"
              alt="OEC LOGO"
              src="https://oecdubai.com/oecuk/assets/images/oec-logo.png"
            />
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          // className={`collapse navbar-collapse ${menuStatus ? "in" : ""}`}
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
