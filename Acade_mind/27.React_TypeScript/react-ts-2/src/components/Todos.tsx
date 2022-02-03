import React from "react";

import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((data) => (
        <TodoItem todoText={data.text} timeStamp={data.time} />
      ))}
    </ul>
  );
};

export default Todos;
