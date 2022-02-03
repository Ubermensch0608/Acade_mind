import React from "react";

const NewTodo = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label>New Todo</label>
      <input type="text" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
