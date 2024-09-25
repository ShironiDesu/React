import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditUser, loadFromLocaleStorage } from "../redux/slice/userSlice";

export default function UsersList() {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const userRole = useSelector((state) => state.user.user);

  const [editingUser, setEditingUser] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedRole, setEditedRole] = useState("");

  useEffect(() => {
    dispatch(loadFromLocaleStorage());
  }, [dispatch]);

  const handleEdit = (user) => {
    setEditingUser(user);
    setEditedName(user.name);
    setEditedRole(user.role);
  };

  const handleSave = () => {
    dispatch(
      EditUser({
        name: editingUser.name,
        newData: { name: editedName, role: editedRole },
      })
    );
    setEditingUser(null);
  };

  const handleCancel = () => {
    setEditingUser(null);
  };

  return (
    <ul>
      {users.map((user) => (
        <li key={user.name}>
          {!editingUser || editingUser.name !== user.name ? (
            <>
              <h2>{user.name}</h2>
              <span>{user.role}</span>
              {userRole.role === "superAdmin" && (
                <button onClick={() => handleEdit(user)}>Edit</button>
              )}
            </>
          ) : (
            <div>
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
              <select
                value={editedRole}
                onChange={(e) => setEditedRole(e.target.value)}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="superAdmin">Super Admin</option>
                <option value="guest">Guest</option>
              </select>
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
