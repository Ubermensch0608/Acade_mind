import React from "react";

const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items.map((data) => (
        <li>{data}</li>
      ))}
    </ul>
  );
};

export default Todos;
