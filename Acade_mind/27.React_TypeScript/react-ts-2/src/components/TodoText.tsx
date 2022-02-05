import React from "react";
import TodoCheck from "./TodoCheck";

const TodoText: React.FC<{
  text: string;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <li onClick={props.onRemoveTodo}>
      {props.text} <TodoCheck />
    </li>
  );
};

export default TodoText;
