const MOCK_DATA = ["리액트 배우기", "타입스크립트 배우기", "깃 배우기"];

const App = () => {
  return (
    <div>
      <ul>
        {MOCK_DATA.map((data) => (
          <li>{data}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
