import Todos from "./components/Todos";
import Todo from "./models/todo";

const App = () => {
  const newTodo = [new Todo("Leran React"), new Todo("Learn TypeScript")];

  return (
    <div>
      <Todos items={newTodo} />
    </div>
  );
};

export default App;
