import React from "react";
import { useDispatch } from "react-redux";
import AdminComponent from "./components/AdminComponent";
import GuestComponent from "./components/GuestComponent";
import withAuth from "./components/ProtectedRoute";
import SuperAdminComponent from "./components/SuperAdminComponent";
import UserComponent from "./components/UserComponent";
import { login } from "./redux/slice/userSlice";

const ProtectedAdmin = withAuth(AdminComponent, ["admin", "superAdmin"]);
const ProtectedGuest = withAuth(GuestComponent, ["admin", "guest", "user"]);
const ProtectedUser = withAuth(UserComponent, ["admin", "user", "superAdmin"]);
const ProtectedSuperAdmin = withAuth(SuperAdminComponent, [
  "admin",
  "superAdmin",
]);

export default function App() {
  const dispatch = useDispatch();
  const handleLogin = (role) => {
    dispatch(login({ name: "User", role }));
  };
  return (
    <div>
      <button onClick={() => handleLogin("admin")}>Login as Admin</button>
      <button onClick={() => handleLogin("user")}>Login as User</button>
      <button onClick={() => handleLogin("guest")}>Login as Guest</button>
      <button onClick={() => handleLogin("superAdmin")}>
        Login main admin
      </button>
      <ProtectedAdmin></ProtectedAdmin>
      <ProtectedGuest></ProtectedGuest>
      <ProtectedUser></ProtectedUser>
      <ProtectedSuperAdmin></ProtectedSuperAdmin>
    </div>
  );
}
