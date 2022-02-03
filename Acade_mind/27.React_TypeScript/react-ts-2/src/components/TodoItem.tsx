import React from "react";

const TodoItem: React.FC<{ todoText: string; timeStamp: string }> = (props) => {
  return (
    <li>
      {props.todoText} {props.timeStamp}
    </li>
  );
};

export default TodoItem;
