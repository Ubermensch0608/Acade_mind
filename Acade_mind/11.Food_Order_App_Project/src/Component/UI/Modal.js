import React from "react";
import Card from "./Card";
import MealItem from "../Meals/MealItem";
import classes from "./Modal.module.css";

const Modal = () => {
  const orderHandler = (amount) => {
    console.log("in App.js");
    console.log(amount);
  };
  return (
    <React.Fragment>
      {<div className={classes.backdrop} />}
      <Card>
        <MealItem giveAmount={orderHandler} />
        <button>-</button>
        <button>+</button>
        <div>Total Amount</div>
        <button>Close</button>
        <button>order</button>
      </Card>
    </React.Fragment>
  );
};

export default Modal;
