import React from "react";
import Todo from "../models/todo";
import TodoText from "./TodoText";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((data) => (
        <TodoText key={data.id} text={data.text} />
      ))}
    </ul>
  );
};

export default Todos;
