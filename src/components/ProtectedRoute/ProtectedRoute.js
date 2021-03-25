import React from "react";
import { Redirect, Route } from "react-router";
import { getCookie } from "../../constants";

const isAuthenticated = () => {
  if (getCookie("token") === null || getCookie("token") === undefined) {
    return false;
  } else {
    return true;
  }
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    ></Route>
  );
};

export default ProtectedRoute;
