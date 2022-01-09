import React from "react";

const DemoOutput = (props) => {
  console.log("DemoOutput is Running");
  return <p>{props.show ? "This is new!" : ""}</p>;
};

// 큰 component tree를 가지고 있을 때,
// 부모 component의 렌더링에 의해
// 자식 component가 불필요한 re-rendering되는 것을
// 막아줄 수 있는 유용한 툴
// app의 사이즈에 따라 유용성이 결정됨
export default React.memo(DemoOutput);
