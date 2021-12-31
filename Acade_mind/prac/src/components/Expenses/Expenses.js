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

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === newFilter;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        onSelected={newFilter}
        onFilterChange={getFilterDataHandler}
      />
      {filteredExpenses.length === 0 && (
        <p className="filter-nothing">No expenses found</p>
      )}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
    </Card>
  );
};

export default Expenses;
