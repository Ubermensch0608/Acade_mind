import { useDispatch } from "react-redux";
import store from "../store";

import classes from "./Counter.module.css";

const Counter = () => {
  const toggleCounterHandler = (store) => {
    store.useDispatch({
      type: "increment",
    });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{store.state}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
