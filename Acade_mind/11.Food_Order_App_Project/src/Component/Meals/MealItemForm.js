import React, { useRef } from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const newAmount = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const sendInfo = {
      name: props.name,
      amount: newAmount.current.value,
    };

    if (sendInfo.amount.trim() > 0) {
      props.newAmount(sendInfo);
    } else {
      console.log("please put valid number");
    }
    newAmount.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        htmlFor="Amount"
        label="Amount"
        type="number"
        input_ref={newAmount}
      />
      <button type="submit">+Add</button>
    </form>
  );
};

export default MealItemForm;
