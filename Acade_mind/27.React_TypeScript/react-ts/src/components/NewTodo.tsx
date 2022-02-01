import React, { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";

import styles from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw and error
      return;
    }

    todosCtx.addTodo(enteredText);

    todoRef.current!.value = "";
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
