import React, { createContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  initializeLoginFramework,
  handleGoogleSignIn,
  FbSignIn,
} from "./LoginMethod";
const axios = require("axios");

export const UserLogin = createContext();

const ContextLogin = ({ children }) => {
  const [login, setLogin] = useState({});
  const [user, setUser] = useState({
    isSignIn: false,
    name: "",
    email: "",
    photo: "",
    password: "",
  });

  //use initializeApp firebase.
  initializeLoginFramework();
  let history = useHistory();
  // let location = useLocation();

  // let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      // setUser(res);
      // setLogin(res);
      console.log(res);
    });
  };
  // const googleSignOut = () => {
  //   handleSignOut().then((res) => {
  //     handleResponse(res, true);
  //   });
  // };
  const FacebookLogin = () => {
    FbSignIn().then((res) => {
      handleResponse(res, false);
    });
  };
  //handleResponse function
  const handleResponse = (res, redirect) => {
    // setUser(res);
    // setLogin(res);
    console.log(res);
    if (redirect) {
      // history.replace(from);
    }
  };

  return (
    <UserLogin.Provider value={[login, setLogin, googleSignIn, FacebookLogin]}>
      {children}
    </UserLogin.Provider>
  );
};

export default ContextLogin;
