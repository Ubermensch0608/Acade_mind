import React, { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const newTodoText = todoTextRef.current!.value;

    if (newTodoText.trim().length === 0) {
      return;
    }

    props.onAddTodo(newTodoText);
    todoTextRef.current!.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">New Todo</label>
      <input id="text" ref={todoTextRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
