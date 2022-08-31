import React from "react";
// import { useState } from "react";
import Form from "./components/Form/Form";
import List from "./components/List/List";

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
      <Form />
      <div className="container rounded mt-5 p-5 pt-4 pb-4 col-5 bg-light ">
        {usersArray.map((user) => (
          <List username={user.username} age={user.age} />
        ))}
      </div>
    </div>
  );
}

export default App;
