import React from "react";

export default function ListItem(props) {
  return (
    <p className="border border-dark p-3 pt-2 pb-2">
      {props.username} ({props.age} years old)
    </p>
  );
}
