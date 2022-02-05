import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const saveTodoHandler = (text: string) => {
    setTodos((prevTodos) => {
      return [new Todo(text), ...prevTodos];
    });
  };

  const removeTodoHandler = (id: string) => {
    console.log(id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <NewTodo onAddTodo={saveTodoHandler} />
      <Todos items={todos} onRemove={removeTodoHandler} />
    </div>
  );
};

export default App;
