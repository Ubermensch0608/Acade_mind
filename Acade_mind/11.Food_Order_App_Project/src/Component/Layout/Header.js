import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import MealsSummary from "./MealsSummary";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes.main_image}>
        <img src="../Layout/meals.jpg" alt="main_img" />
      </div>
      <MealsSummary />
    </React.Fragment>
  );
};

export default Header;
