import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { UserLogin } from "../../../Contexts/ContextAuth/ContextLogin";

const PrivateRoute = ({ children, ...rest }) => {
  const [login, setLogin] = useContext(UserLogin);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        login.email ? (
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
  );
};

export default PrivateRoute;
