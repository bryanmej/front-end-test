import React from "react";
import mex from "../assets/mexico.png";
import usa from "../assets/usa.png";
import "../styles/FootAddressStyles.css";

const FootAddress = ({ country, address, phone }) => {
  return (
    <>
      <img
        src={country === "usa" ? usa : mex}
        className="country-icon"
        alt="country"
      />
      <h6 className="addr-country">{country === "usa" ? "USA" : "MEX"}</h6>
      <p className="footer-text">{address}</p>
      <p className="footer-text">{phone}</p>
    </>
  );
};

export default FootAddress;
