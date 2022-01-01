import React, { useState } from "react";
import Form from "./Components/Form/Form";
import UserInfo from "./Components/UserInfo/UserInfo";

function App() {
  const [newInfo, setNewInfo] = useState([]);
  const getInfoHandler = (info) => {
    setNewInfo([
      {
        id: info.id,
        name: info.name,
        age: info.age,
      },
      ...newInfo,
    ]);
  };

  return (
    <div>
      <Form giveUserInfo={getInfoHandler} />
      <UserInfo getUserInfo={newInfo} />
    </div>
  );
}

export default App;
