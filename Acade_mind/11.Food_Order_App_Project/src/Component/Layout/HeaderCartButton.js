import React from "react";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return <button className={classes.button}>{props.text}</button>;
};

export default HeaderCartButton;
