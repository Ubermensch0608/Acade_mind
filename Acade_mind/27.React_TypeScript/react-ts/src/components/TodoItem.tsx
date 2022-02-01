import React from "react";
import styles from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  id: string;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <li className={styles.item} id={props.id} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
