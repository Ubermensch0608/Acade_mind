import React from "react";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      {/* button안에 세 가지 다른 내용이 나란히 들어가므로 세 개의 span으로 구성 */}
      <CartIcon />
      Your Cart
      <div className={classes.badge}></div>
    </button>
  );
};

export default HeaderCartButton;
