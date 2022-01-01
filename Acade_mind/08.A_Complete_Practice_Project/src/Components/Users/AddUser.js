import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");

  const nameHandler = (e) => {
    setNewName(e.target.value);
  };

  const ageHandler = (e) => {
    setNewAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const info = {
      id: Math.random().toString(),
      name: newName,
      age: newAge,
    };
    props.giveUserInfo(info);
    setNewName("");
    setNewAge("");
  };
  return (
    <Card className={styles.input}>
      <form className="form-input" onSubmit={submitHandler}>
        <div className="form-input__name">
          <label>Your Name </label>
          <input type="text" onChange={nameHandler} value={newName} />
        </div>
        <div className="form-imput__age">
          <label>Your Age</label>
          <input type="number" onChange={ageHandler} value={newAge} />
        </div>
        <Button type="submit">Add new user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
