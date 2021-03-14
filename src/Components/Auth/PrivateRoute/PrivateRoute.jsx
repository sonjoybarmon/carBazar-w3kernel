import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { UserLogin } from "../../../Contexts/ContextAuth/ContextLogin";

const PrivateRoute = ({ children, ...rest }) => {
  const [login, setLogin] = useContext(UserLogin);

  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          login.email || localStorage.getItem("email") ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;
