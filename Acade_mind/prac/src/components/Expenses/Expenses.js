import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [newFilter, setNewFilter] = useState("2022");

  const getFilterDataHandler = (newValue) => {
    setNewFilter(newValue);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onSelected={newFilter}
        onFilterChange={getFilterDataHandler}
      />
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
