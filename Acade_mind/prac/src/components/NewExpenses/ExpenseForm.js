import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  const newTitleHandler = (e) => {
    setNewTitle(e.target.value);
  };
  const newAmountHandler = (e) => {
    setNewAmount(e.target.value);
  };
  const newDateHandler = (e) => {
    setNewDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newData = {
      title: newTitle,
      amount: newAmount,
      date: new Date(newDate),
    };

    props.getData(newData);

    setNewTitle("");
    setNewAmount("");
    setNewDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={newTitleHandler} value={newTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={newAmountHandler}
            value={newAmount}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={newDateHandler}
            value={newDate}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expenses__actions">
        <button type="submmit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
