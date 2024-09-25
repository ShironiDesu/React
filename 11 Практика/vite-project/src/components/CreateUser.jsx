import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice/userSlice";

export default function CreateUser() {
  const [user, setUser] = useState("");
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const handleRole = (value) => {
    setRole(value);
  };
  const addUserHandle = () => {
    dispatch(addUser({ id: Date.now(), name: user, role: role }));
  };

  return (
    <div>
      <input
        type="text"
        value={user}
        placeholder="name"
        onChange={(e) => setUser(e.target.value)}
      />
      <select name="" id="" onChange={(e) => handleRole(e.target.value)}>
        <option disabled>Выберите роль</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
      <button onClick={addUserHandle}>Добавить пользователя</button>
    </div>
  );
}
