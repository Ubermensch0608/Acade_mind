import React, { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const inputTextRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const newTodoText = inputTextRef.current!.value;

    if (newTodoText.trim().length === 0) {
      return;
    }

    props.onAddTodo(newTodoText);
    inputTextRef.current!.value = "";
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
