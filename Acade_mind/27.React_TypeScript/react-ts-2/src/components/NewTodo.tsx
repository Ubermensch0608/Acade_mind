import React, { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const newInputValue = todoTextRef.current!.value;

    props.onAddTodo(newInputValue);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todo">New Todo</label>
      <input id="todo" type="text" ref={todoTextRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
