import Todos from "./components/Todos";

const MOCK_DATA = ["리액트 배우기", "타입스크립트 배우기", "깃 배우기"];

const App = () => {
  return (
    <div>
      <Todos items={MOCK_DATA} />
    </div>
  );
};

export default App;
