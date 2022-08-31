import React from "react";
import { useState } from "react";
import Button from "../UI/Button";

export default function Form(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const enteredUserData = {
    username: enteredUsername,
    age: enteredAge,
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddUser(enteredUserData);
  };

  return (
    <div className="container rounded mt-5 p-5 pt-4 pb-4 col-5 bg-light ">
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputUsername" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputUsername"
            onChange={usernameChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputAge" className="form-label">
            Age (Years)
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputAge"
            onChange={ageChangeHandler}
          />
        </div>
        <Button textContent="Add User" />
      </form>
    </div>
  );
}
