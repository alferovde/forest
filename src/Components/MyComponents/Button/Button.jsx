import React from "react";
import style from "./button.module.scss";
const Button = ({ children, disable, onClick, className }) => {
  return (
    <button
      className={`${style.button_style} ${className}`}
      onClick={onClick}
      disabled={disable}
    >
      {children}
    </button>
  );
};

export default Button;
