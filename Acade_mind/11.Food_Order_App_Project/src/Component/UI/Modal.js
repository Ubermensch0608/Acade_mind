import React from "react";
import MealItem from "../Meals/MealItem";
import MealItemForm from "../Meals/MealItemForm";
import Card from "./Card";
import classes from "./Modal.module.css";

const Modal = (props) => {
  console.log(props.orderMunu);
  return (
    <div>
      <div className={classes.backdrop}></div>
      <Card div className={classes.modal}>
        {/* <ul>
            {props.orderMenu.map((menu) => {
              return <li>{menu}</li>;
            })}
          </ul> */}

        <MealItem />
        <MealItemForm />
        <button onClick={props.onClose}>close</button>
        <button>order</button>
      </Card>
    </div>
  );
};

export default Modal;
