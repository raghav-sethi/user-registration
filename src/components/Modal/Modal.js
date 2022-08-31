import React from "react";
import Button from "../UI/Button";
import styles from "./Modal.module.css";

export default function Modal(props) {
  const modalTakeDownHandler = () => {
    props.onOkayClick(false);
  };
  return (
    <div className="container rounded mt-5 p-5 pt-4 pb-4 col-5 bg-light ">
      <div className={` ${styles.indigoDiv}`}>
        <h2>{props.errorHeading}</h2>
      </div>
      <div>
        <p>{props.errorMessage}</p>
      </div>
      <div>
        <Button onClick={modalTakeDownHandler} textContent="Okay" />
      </div>
    </div>
  );
}
