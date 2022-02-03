import React from "react";

import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ items: Todo[]; onRemove: (id: string) => void }> = (
  props
) => {
  return (
    <ul>
      {props.items.map((data) => (
        <TodoItem
          key={data.id}
          todoText={data.text}
          timeStamp={data.time}
          onRemove={props.onRemove.bind(null, data.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
