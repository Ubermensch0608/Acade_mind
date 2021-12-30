import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

function App() {
  const [expenses, setExpenses] = useState([]);
  console.log(expenses);
  const newSavedDataHandler = (saveData) => {
    setExpenses((prevExpenses) => {
      return [saveData, ...prevExpenses];
    });
    console.log(expenses);
  };
  return (
    <div>
      <NewExpenses newSavedData={newSavedDataHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
