import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
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

    if (newName.trim().length === 0 || newAge.trim().length === 0) {
      alert("Please fill in the blanks");
      return;
    } else if (+newAge < 1) {
      alert("Please check your Age that you've put");
      return;
    }

    props.onAddUser(newName, newAge);
    setNewName("");
    setNewAge("");
  };
  return (
    <>
      <ErrorModal title="error occured!" msg="Something went wrong!" />
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
