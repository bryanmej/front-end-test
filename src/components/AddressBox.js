import React from "react";
import "../styles/AddressBoxStyles.css";

const AddressBox = ({ street, area, phone }) => {
  return (
    <address className="address-box">
      <b className="street">{street}</b>
      <p className="area">{area}</p>
      <p className="phone">{phone}</p>
    </address>
  );
};

export default AddressBox;
