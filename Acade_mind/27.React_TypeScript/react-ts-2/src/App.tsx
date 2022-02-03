import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

const MOCK_DATA = [
  new Todo("리액트 배우기"),
  new Todo("타입스크립트 배우기"),
  new Todo("깃 배우기"),
];

const App = () => {
  return (
    <div>
      <NewTodo />
      <Todos items={MOCK_DATA} />
    </div>
  );
};

export default App;
