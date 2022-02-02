import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { Todo } from "./models/todo";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const saveTodoHandler = (NewTodo: string) => {
    console.log(NewTodo, "in App.tsx");

    setTodos((prevTodos) => {
      return [new Todo(NewTodo), ...prevTodos];
    });
  };

  const removeTodoHandler = (todoTextId: string) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== todoTextId));
  };

  return (
    <div>
      <NewTodo onAddTodo={saveTodoHandler} />
      <Todos item={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
};

export default App;
