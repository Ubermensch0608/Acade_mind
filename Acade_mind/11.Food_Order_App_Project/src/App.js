import React, { useState } from "react";
import Header from "./Component/Layout/Header";
import AvailableMeals from "./Component/Meals/AvailableMeals";
import Modal from "./Component/UI/Modal";

function App() {
  const [newOrder, setNewOrder] = useState();
  const [isClose, setIsClose] = useState(false);

  const orderHandler = () => {
    setIsClose(true);
  };

  const closeHandler = () => {
    setIsClose(false);
  };

  const saveAmount = (amount) => {
    setNewOrder(amount);
    console.log(amount);
  };

  return (
    <React.Fragment>
      {isClose && <Modal orderMenu={newOrder} onClose={closeHandler} />}
      <Header onClick={orderHandler} />
      <AvailableMeals newAmount={saveAmount} />
    </React.Fragment>
  );
}

export default App;
