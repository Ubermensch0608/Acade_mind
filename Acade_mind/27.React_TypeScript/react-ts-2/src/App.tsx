import Todos from "./components/Todos";

const MOCK_DATA = ["리액트 배우기", "자바스크립트 공부하기"];

const App = () => {
  return (
    <div>
      <Todos items={MOCK_DATA} />
    </div>
  );
};

export default App;
