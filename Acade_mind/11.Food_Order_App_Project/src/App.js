import React from "react";
import Header from "./Component/Layout/Header";
import AvailableMeals from "./Component/Meals/AvailableMeals";

function App() {
  const saveAmount = (amount) => {
    console.log("in App.js");
    console.log(amount);
  };

  return (
    <React.Fragment>
      <Header />
      <AvailableMeals newAmount={saveAmount} />
    </React.Fragment>
  );
}

export default App;
