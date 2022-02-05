import React from "react";
import Todo from "../models/todo";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((data) => (
        <li key={data.id}>
          {data.text} {data.check}
        </li>
      ))}
    </ul>
  );
};

export default Todos;
