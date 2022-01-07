import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onCartHandler = () => {
    setIsOpen(true);
  };
  const closeHandler = () => {
    setIsOpen(false);
  };
  const orderHandler = () => {
    setIsOpen(false);
    console.log("Order is completed!");
  };

  return (
    <React.Fragment>
      {isOpen && <Cart onClose={closeHandler} onOrder={orderHandler} />}
      <Header onCart={onCartHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
};

export default App;
