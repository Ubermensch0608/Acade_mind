import React, { useState } from "react";
import DUMMY_MEALS from "../dummy-meals";
import Card from "../UI/Card";
import MealItem from "./MealItem";
import MealItemForm from "./MealItemForm";

import classes from "./AvailableMeals.module.css";

const AvailableMeals = (props) => {
  const [newInfo, setNewInfo] = useState([]);

  return (
    <Card className={classes.meals}>
      <ul>
        {DUMMY_MEALS.map((meal) => {
          const saveAmount = (info) => {
            setNewInfo((prevInfo) => {
              return [
                {
                  name: meal.name,
                  amount: info.amount,
                },
                ...prevInfo,
              ];
            });
            props.newAmount(newInfo);
          };
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
