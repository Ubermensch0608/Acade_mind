import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../models/todo";

const Todos: React.FC<{
  item: Todo[];
  onRemoveTodo: (id: string) => void;
}> = (props) => {
  return (
    <ul>
      {props.item.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
