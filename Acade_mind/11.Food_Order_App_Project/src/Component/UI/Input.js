import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor="Amount">Amount</label>
      <input
        type={props.type || "number"}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
