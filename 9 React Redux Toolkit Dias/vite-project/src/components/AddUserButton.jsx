import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/users/UserSlice";

export default function AddUserButton() {
  const dispatch = useDispatch();
  const handleAddUser = () => {
    const newUser = { id: Date.now(), firstName: "Carl" };
    dispatch(addUser(newUser));
  };
  return <button onClick={handleAddUser}>Add User</button>;
}
