import React from "react";
import DUMMY_MEALS from "../dummy-meals";
import Card from "../UI/Card";
import MealItem from "./MealItem";
import MealItemForm from "./MealItemForm";

import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  return (
    <Card className={classes.meals}>
      <ul>
        {DUMMY_MEALS.map((meal) => {
          return (
            <li>
              <MealItem
                name={meal.name}
                desc={meal.description}
                price={meal.price}
              />
              <MealItemForm />
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default AvailableMeals;
