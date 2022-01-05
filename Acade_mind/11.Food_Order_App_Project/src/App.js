import React from "react";
import Header from "./Component/Layout/Header";
import Modal from "./Component/UI/Modal";
import AvailableMeals from "./Component/Meals/AvailableMeals";

function App() {
  return (
    <div>
      {/* <Modal /> */}
      <Header />

      <AvailableMeals />
    </div>
  );
}

export default App;
