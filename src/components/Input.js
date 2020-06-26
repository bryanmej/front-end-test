import React from "react";

const Input = ({ type, placeholder, inputHandler }) => {
  return type === "text" ? (
    <input
      className="input"
      placeholder={placeholder}
      onChange={inputHandler}
    />
  ) : (
    <textarea className="area-input" onChange={inputHandler} />
  );
};

export default Input;
