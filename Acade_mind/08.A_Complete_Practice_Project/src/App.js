import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [newInfo, setNewInfo] = useState([]);
  const addUserHandler = (userName, userAge) => {
    setNewInfo((prevInfo) => {
      return [
        ...prevInfo,
        { id: Math.random().toString(), name: userName, age: userAge },
      ];
    });
  };

  console.log("in App.js");
  console.log(newInfo);
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={newInfo} />
    </div>
  );
}

export default App;
