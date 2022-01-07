import React from "react";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  return (
    <button className={classes.button}>
      <CartIcon />
      Your Cart
      <div className={classes.badge}></div>
    </button>
  );
};

export default HeaderCartButton;
