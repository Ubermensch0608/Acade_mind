import React from "react";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <div className={classes.meal}>
      <h3>{props.name}</h3>
      <p className={classes.description}>{props.desc}</p>
      <p className={classes.price}>{props.price}</p>
    </div>
  );
};

export default MealItem;
