import React, { useRef } from "react";
import classes from "./MealItemForm.module.css";

const MealItemForm = () => {
  const newAmount = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const sendAmount = newAmount.current.value;
    console.log(sendAmount);
    newAmount.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="Amount">Amount</label>
      <input ref={newAmount} type="number" />
      <button type="submit">+Add</button>
    </form>
  );
};

export default MealItemForm;
