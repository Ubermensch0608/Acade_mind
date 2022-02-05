import React from "react";
import Todo from "../models/todo";
import TodoText from "./TodoText";

const Todos: React.FC<{
  items: Todo[];
  onRemove: (id: string) => void;
}> = (props) => {
  const onRemoveHandler = (id: string) => {
    props.onRemove(id);
  };

  return (
    <ul>
      {props.items.map((data) => (
        <TodoText
          key={data.id}
          text={data.text}
          onRemoveTodo={onRemoveHandler.bind(null, data.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
