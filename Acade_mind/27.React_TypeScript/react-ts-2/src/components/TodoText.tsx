import React from "react";
import TodoCheck from "./TodoCheck";

const TodoText: React.FC<{ text: string }> = (props) => {
  return (
    <li>
      {props.text} <TodoCheck />
    </li>
  );
};

export default TodoText;
