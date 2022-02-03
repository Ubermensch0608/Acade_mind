import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const saveTodoHandler = (text: string) => {
    setTodos((prev) => {
      return [new Todo(text), ...prev];
    });
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={saveTodoHandler} />
      <Todos items={todos} onRemove={removeTodoHandler} />
    </div>
  );
};

export default App;
