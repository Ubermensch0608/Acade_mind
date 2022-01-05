import React, { useState } from "react";
import MealItem from "./MealItem";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amount, setAmount] = useState("");

  const getAmount = (e) => {
    setAmount(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    props.giveAmount(amount);
    setAmount("");
  };

  const onReset = () => {};
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <MealItem name={props.name} desc={props.desc} price={props.price} />
      <Input onChange={getAmount} value={amount} />
      <button type="submit" onClick={onReset}>
        +Add
      </button>
    </form>
  );
};

export default MealItemForm;
