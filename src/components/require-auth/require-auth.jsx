import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";

function RequireAuth({ children }) {
  const currentUser = useSelector(selectCurrentUser);
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
}

export default RequireAuth;
