import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import Chart from "./components/Chart/Chart";

function App() {
  const [expenses, setExpenses] = useState([]);
  const newSavedDataHandler = (saveData) => {
    setExpenses((prevExpenses) => {
      return [saveData, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpenses newSavedData={newSavedDataHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
