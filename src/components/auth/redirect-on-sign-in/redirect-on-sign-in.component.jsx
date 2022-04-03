import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/user/user.selector";

const redirectOnSignIn = (Component) => () => {
  const currentUser = useSelector(selectCurrentUser);
  const location = useLocation();

  if (currentUser) {
    return <Navigate to="/portfolio" state={{ from: location }} />;
  }

  return <Component />;
};

export default redirectOnSignIn;
