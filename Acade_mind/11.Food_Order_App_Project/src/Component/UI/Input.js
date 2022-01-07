import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input type={props.type} ref={props.input_ref} />
    </div>
  );
};

export default Input;
