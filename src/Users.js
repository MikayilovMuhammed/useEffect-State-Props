import React from "react";
import UsersTwo from "./UsersTwo";

function Users({ username, group, clicked, state }) {
  return (
    <div>
      <h1>group: {group}</h1>
      <h1>Username: {username} </h1>
      <button onClick={clicked}>Click</button>
      <button onClick={() => console.log(state)}>Show state</button>
    </div>
  );
}

export default Users;
