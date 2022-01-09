import React from "react";

const DemoOutput = (props) => {
  console.log("DemoOutput is Running");
  return <p>{props.show ? "This is new!" : ""}</p>;
};

export default DemoOutput;
