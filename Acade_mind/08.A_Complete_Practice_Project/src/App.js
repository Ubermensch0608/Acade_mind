import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
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
      <AddUser giveUserInfo={getInfoHandler} />
      <UserInfo getUserInfo={newInfo} />
    </div>
  );
}

export default App;
