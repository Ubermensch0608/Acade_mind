import React from "react";
import ExpenseDate from "../Expenses/ExpenseDate";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const getDataHandler = (newData) => {
    const saveData = {
      ...newData,
      id: Math.random().toString(),
    };

    props.newSavedData(saveData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm getData={getDataHandler} />
    </div>
  );
};

export default NewExpenses;
