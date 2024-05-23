import React from "react";
import "./input.scss";
const Input = ({ placeholder, onChange }) => {
  return (
    <input
      className="my_input"
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default Input;
