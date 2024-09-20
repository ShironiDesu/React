import React from "react";
import AddUserButton from "./components/AddUserButton";
import UserList from "./components/UserList";

export default function App() {
  return (
    <div className="App">
      <h1>UserList</h1>
      <AddUserButton></AddUserButton>
      <UserList></UserList>
    </div>
  );
}
