import React from "react";

const TodoItem: React.FC<{
  id: string;
  text: string;
  onRemoveTodo: () => void;
}> = (props) => {
  return <li onClick={props.onRemoveTodo}>{props.text}</li>;
};

export default TodoItem;
