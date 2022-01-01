import React, { useState } from "react";

const Form = (props) => {
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
    <form className="form-input" onSubmit={submitHandler}>
      <div className="form-input__name">
        <label>Your Name </label>
        <input type="text" onChange={nameHandler} value={newName} />
      </div>
      <div className="form-imput__age">
        <label>Your Age</label>
        <input type="number" onChange={ageHandler} value={newAge} />
      </div>
      <div className="form-submit">
        <button type="submit" className="form-submit__button">
          Add your info
        </button>
      </div>
    </form>
  );
};

export default Form;
