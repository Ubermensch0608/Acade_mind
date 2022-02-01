import React, { useRef } from "react";

import styles from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw and error
      return;
    }

    props.onAddTodo(enteredText);
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
