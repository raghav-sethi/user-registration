import React from "react";
import ListItem from "./ListItem";

export default function List(props) {
  return (
    <div className="container rounded mt-5 p-5 pt-4 pb-4 col-5 bg-light ">
      {props.usersArray.map((user) => (
        <ListItem username={user.username} age={user.age} />
      ))}
    </div>
  );
}
