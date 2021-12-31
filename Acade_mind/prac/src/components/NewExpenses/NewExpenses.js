import React from "react";
import { useState } from "react/cjs/react.development";
import ExpenseDate from "../Expenses/ExpenseDate";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const [isFold, setIsFold] = useState(false);

  const getDataHandler = (newData) => {
    const saveData = {
      ...newData,
      id: Math.random().toString(),
    };
    props.newSavedData(saveData);
    setIsFold(false);
  };

  const onOpenHandler = () => {
    setIsFold(true);
  };
  const onCloseHandler = () => {
    setIsFold(false);
  };

  return (
    <div className="new-expense">
      {!isFold && <button onClick={onOpenHandler}>Add new expenses</button>}
      {isFold && (
        <ExpenseForm getData={getDataHandler} onClose={onCloseHandler} />
      )}
    </div>
  );
};

export default NewExpenses;
