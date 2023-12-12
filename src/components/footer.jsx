import React from "react";

export const Footer = (props) => {
  return (
    <>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; {new Date().getFullYear()} OECIndia | All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};
