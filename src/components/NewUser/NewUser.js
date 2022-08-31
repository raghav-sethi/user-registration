import React from "react";
import Form from "./Form";

export default function NewUser() {
  const userAddHandler = (enteredUserData) => {
    console.log(enteredUserData);
  };

  return (
    <div>
      <Form onAddUser={userAddHandler} />
    </div>
  );
}
