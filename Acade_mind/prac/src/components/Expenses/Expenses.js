import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [newFilter, setNewFilter] = useState("2022");

  const getFilterDataHandler = (newValue) => {
    setNewFilter(newValue);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === newFilter;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSelected={newFilter}
          onFilterChange={getFilterDataHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;
