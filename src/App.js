import React from "react";
// import { useState } from "react";
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
  return (
    <div>
      <NewUser />
      <List usersArray={usersArray} />
    </div>
  );
}

export default App;
