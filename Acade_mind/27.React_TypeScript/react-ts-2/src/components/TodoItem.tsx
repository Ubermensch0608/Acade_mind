import React from "react";

const TodoItem: React.FC<{
  todoText: string;
  timeStamp: string;
  onRemove: () => void;
}> = (props) => {
  return (
    <li onClick={props.onRemove}>
      {props.todoText} {props.timeStamp}
    </li>
  );
};

export default TodoItem;
