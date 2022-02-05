const MOCK_DATA = ["리액트 배우기", "자바스크립트 공부하기"];

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
