import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import MealsSummary from "./MealsSummary";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <React.Fragment>
      <div className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton text="Your Cart">Your Cart</HeaderCartButton>
      </div>
      <MealsSummary />
    </React.Fragment>
  );
};

export default Header;
