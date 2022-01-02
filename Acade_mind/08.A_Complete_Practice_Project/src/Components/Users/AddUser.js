import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [error, setError] = useState();

  const nameHandler = (e) => {
    setNewName(e.target.value);
  };

  const ageHandler = (e) => {
    setNewAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (newName.trim().length === 0 || newAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        msg: "Please enter a valid name and age (non-empty values).",
      });
      return;
    } else if (+newAge < 1) {
      setError({
        title: "Invalid input",
        msg: "Please enter a valid age ( >0 ).",
      });
      return;
    }

    props.onAddUser(newName, newAge);
    setNewName("");
    setNewAge("");
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          msg={error.msg}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form className="form-input" onSubmit={submitHandler}>
          <label htmlFor="username">Your Name </label>
          <input
            id="username"
            type="text"
            onChange={nameHandler}
            value={newName}
          />

          <label htmlFor="age">Your Age</label>
          <input id="age" type="number" onChange={ageHandler} value={newAge} />

          <Button type="submit">Add new user</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
