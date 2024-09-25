import { useSelector } from "react-redux";

const withAuth = (Component, allowedRoles) => {
  return () => {
    const user = useSelector((state) => state.user.user);

    console.log(user.role);

    if (allowedRoles.includes(user.role)) {
      return <Component />;
    } else {
      return <div>Access denied</div>;
    }
  };
};

export default withAuth;
