import React from "react";
import DUMMY_MEALS from "../dummy-meals";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItemForm from "./MealItemForm";

const AvailableMeals = (props) => {
  const amountHandler = (amount) => {
    props.giveAmount(amount);
  };

  return (
    <Card classes={classes.meals}>
      <ul>
        {DUMMY_MEALS.map((item) => {
          return (
            <li key={item.id}>
              <MealItemForm
                giveAmount={amountHandler}
                name={item.name}
                desc={item.description}
                price={item.price}
              />
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default AvailableMeals;
