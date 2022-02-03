import React from "react";
import "./Button.css";
import classnames from "classnames";

const Button = ({children, variant = "primary", ...props}) => {
  return (
    <button className={classnames("button", variant)} type="button" {...props}>{children}</button>
  )
};

export default Button;
