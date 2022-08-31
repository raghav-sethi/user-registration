import React from "react";
import Form from "./Form";
import Modal from "./../Modal/Modal";
import { useState } from "react";

export default function NewUser(props) {
  const [modal, setModal] = useState(false);
  const userAddHandler = (enteredUserData) => {
    if (enteredUserData.username === "" || enteredUserData.age === "") {
      setModal(true);
    } else {
      props.onAddUser(enteredUserData);
    }
  };
  const modalTakeDownHandler = (modalSetting) => {
    setModal(modalSetting);
  };
  return (
    <div>
      <Form onAddUser={userAddHandler} />
      {modal && (
        <Modal
          onOkayClick={modalTakeDownHandler}
          errorHeading="Invalid Input"
          errorMessage="Please enter a valid name and age."
        />
      )}
    </div>
  );
}
