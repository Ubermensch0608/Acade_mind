import Todos from "./components/Todos";
import Todo from "./models/todo";

const MOCK_DATA = [
  new Todo("자바스크립트 공부하기", "false"),
  new Todo("리액트 배우기", "false"),
];

const App = () => {
  return (
    <div>
      <Todos items={MOCK_DATA} />
    </div>
  );
};

export default App;
