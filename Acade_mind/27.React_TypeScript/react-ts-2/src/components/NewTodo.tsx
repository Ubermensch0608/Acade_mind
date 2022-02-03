import React, { useRef } from "react";

const NewTodo = () => {
  const inputTextRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const newTodoText = inputTextRef.current!.value;

    console.log(newTodoText);
  };

  return (
    <form onSubmit={submitHandler}>
      <label>New Todo</label>
      <input type="text" ref={inputTextRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
