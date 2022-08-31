import React from "react";

export default function Button(props) {
  return (
    <button onClick={props.onClick} type="submit" className="btn btn-primary">
      {props.textContent}
    </button>
  );
}
