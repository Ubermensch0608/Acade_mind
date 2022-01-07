import React from "react";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <CartIcon />
      Your Cart
      <div className={classes.badge}></div>
    </button>
  );
};

export default HeaderCartButton;
