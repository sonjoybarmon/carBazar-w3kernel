import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useLocation } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

const axios = require("axios");
export const UserLogin = createContext();

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const ContextLogin = ({ children }) => {
  const [login, setLogin] = useState({
    isSignIn: false,
    name: "",
    email: "",
    photo: "",
    password: "",
  });

  const userSignOut = () => {
    return firebase
      .auth()
      .signOut()
      .then((res) => {
        const signOutUser = {
          isSignedIn: false,
          name: "",
          photo: "",
          email: "",
          error: "",
          success: false,
        };
        localStorage.removeItem("email");
        window.location.reload(false);
        return signOutUser;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const forgotPassword = (Email) => {
    firebase
      .auth()
      .sendPasswordResetEmail(Email)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("okkkkkkkkk");
  };

  // console.log(login);

  // const createUser = (payload) => {
  //   console.log("post");
  //   axios
  //     .post("https://safe-bastion-79755.herokuapp.com/driver", {
  //       data: payload,
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  return (
    <UserLogin.Provider value={[login, setLogin, userSignOut, forgotPassword]}>
      {children}
    </UserLogin.Provider>
  );
};

export default ContextLogin;
