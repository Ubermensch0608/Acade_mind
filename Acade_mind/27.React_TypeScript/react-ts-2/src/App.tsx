import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const saveTodoHandler = (todo: string) => {
    const newTodo = new Todo(todo);

    setTodos((prevTodo) => {
      // concat과 reverse를 사용하는 방법
      // return prevTodo.reverse().concat(newTodo).reverse();
      return [newTodo, ...prevTodo]; // spread 문법을 쓰는 방법
    });
  };

  const removeTodoHandler = (todoId: string) => {
    console.log(todoId);
    setTodos((prevTodo)=>{
      return prevTodo.filter((item)=> item.id !== todoId)
    })
  };

  return (
    <div>
      <NewTodo onAddTodo={saveTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
};

export default App;
