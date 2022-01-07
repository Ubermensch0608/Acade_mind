import React from "react";
import DUMMY_MEALS from "../dummy-meals";
import Card from "../UI/Card";
import MealItem from "./MealItem";
import MealItemForm from "./MealItemForm";

import classes from "./AvailableMeals.module.css";

const AvailableMeals = (props) => {
  const saveAmount = (amount) => {
    props.newAmount(amount);
  };

  return (
    <Card className={classes.meals}>
      <ul>
        {DUMMY_MEALS.map((meal) => {
          return (
            <li key={meal.id}>
              <MealItem
                name={meal.name}
                desc={meal.description}
                price={meal.price}
              />
              <MealItemForm newAmount={saveAmount} />
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default AvailableMeals;
