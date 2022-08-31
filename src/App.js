import React from "react";
import { useState } from "react";
import List from "./components/List/List";
import NewUser from "./components/NewUser/NewUser";

const usersArray = [
  {
    username: "test1",
    age: 0,
  },
  {
    username: "test2",
    age: 1,
  },
];

function App() {
  const [userArray, setUserArray] = useState(usersArray);

  const addUserHandler = (enteredUserData) => {
    setUserArray((prevData) => {
      return [enteredUserData, ...prevData];
    });
  };
  return (
    <div>
      <NewUser onAddUser={addUserHandler} />
      <List usersArray={userArray} />
    </div>
  );
}

export default App;
