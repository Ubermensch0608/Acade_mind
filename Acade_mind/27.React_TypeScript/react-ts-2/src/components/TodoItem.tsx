import React from "react";

const TodoItem: React.FC<{
  todoText: string;
  onRemoveTodo: () => void;
}> = (props) => {
  return <li onClick={props.onRemoveTodo}>{props.todoText}</li>;
};

export default TodoItem;
