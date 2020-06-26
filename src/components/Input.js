import React from "react";

const Input = ({ type, placeholder }) => {
  return type === "text" ? (
    <input className="input" placeholder={placeholder} />
  ) : (
    <textarea className="area-input" />
  );
};

export default Input;
