import React, { useState } from "react";
import TodoCheck from "./TodoCheck";

const TodoText: React.FC<{
  text: string;
  onRemoveTodo: () => void;
}> = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const isCheckedHandler = (isChecked: boolean) => {
    setIsChecked(isChecked);
  };

  return (
    <li>
      {isChecked ? <del>{props.text}</del> : <>{props.text}</>}
      <button onClick={props.onRemoveTodo}>삭제</button>
      <TodoCheck onChecked={isCheckedHandler} />
    </li>
  );
};

export default TodoText;
