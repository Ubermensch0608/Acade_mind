import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const isShow = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); // { type: SOME_UNIQUE_INDENTIFIER, payload: 10 }
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {/* isShow가 Truthy한 값일 때 counter value가 보임*/}
      {isShow && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>-</button>
        <button onClick={increaseHandler}>increase by 10</button>
        <button onClick={incrementHandler}>+</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
