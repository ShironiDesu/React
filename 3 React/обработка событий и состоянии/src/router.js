import Home from "./routes/Home";
import LoginPage from "./routes/LoginPage";
import PostInfo from "./routes/PostInfo";
import PostPage from "./routes/PostPage";

export const privateRoutes = [
  { path: "/", element: Home, exact: false },
  { path: "/posts", element: PostPage, exact: true },
  { path: "/posts/:postId", element: PostInfo, exact: true },
  { path: "/logout", element: Home, exact: true },
];
export const publicRoutes = [
  { path: "/", element: Home, exact: false },
  { path: "/login", element: LoginPage, exact: true },
];
