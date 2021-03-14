import { Button, Container, Grid, Typography } from "@material-ui/core";
import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Card } from "ui-glassmorphism";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./SignUp.scss";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../Contexts/ContextAuth/firebaseConfig";
import { UserLogin } from "../../Contexts/ContextAuth/ContextLogin";
import BackButton from "../../Hoc/BackButton";

const SignUp = () => {
  const [login, setLogin, createUser] = useContext(UserLogin);
  const [newUser, setNewUser] = useState({});
  const { register, errors, handleSubmit, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const onSubmit = (data) => {
    setNewUser(data);

    if (newUser.email && newUser.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((res) => {
          const newUserInfo = res.user;
          newUserInfo.error = "";
          newUserInfo.success = true;
          history.replace(from);
          localStorage.setItem("email", res.user.email);
          setLogin(newUserInfo);
        })
        .catch(function (error) {
          const newUserInfo = { ...newUser };
          newUserInfo.message = error.message;
          newUserInfo.success = false;
          setLogin(newUserInfo);
        });
    }

    // console.log(data);
  };

  console.log(newUser);
  return (
    <div className="signUp">
      <Container>
        <Grid container item md={12}>
          <Grid md={3} item></Grid>
          <Grid md={6} item>
            <Card className="signUp__Wrapper" style={{ position: "relative" }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h6">Sign up</Typography>
                <div className="input_Wrapper">
                  {/* <Typography variant="subtitle1">First Name</Typography>
                  <input
                    name="Fname"
                    ref={register({ required: true })}
                    className="authInput"
                    placeholder="Enter Your First Name"
                  />
                  <Typography variant="caption" className="inputError">
                    {errors.Fname && "First name is required"}
                  </Typography>

                  <Typography variant="subtitle1">Last Name</Typography>
                  <input
                    name="Lname"
                    ref={register({ required: true })}
                    className="authInput"
                    placeholder="Enter Your Last Name"
                  />
                  <Typography variant="caption" className="inputError">
                    {errors.Lname && "Last name is required"}
                  </Typography> */}

                  <Typography variant="subtitle1">Full Name</Typography>
                  <input
                    name="name"
                    ref={register({ required: true })}
                    className="authInput"
                    placeholder="Enter Your full Name"
                  />
                  <Typography variant="caption" className="inputError">
                    {errors.name && "full name is required"}
                  </Typography>

                  <Typography variant="subtitle1">Email</Typography>
                  <input
                    name="email"
                    ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
                    className="authInput"
                    placeholder="Enter Your Email"
                  />
                  <Typography variant="caption" className="inputError">
                    {errors.email && "Please Enter a valid email"}
                  </Typography>

                  <Typography variant="subtitle1">password</Typography>
                  <input
                    name="password"
                    type="password"
                    ref={register({ required: true, minLength: 8 })}
                    className="authInput"
                    placeholder="Enter Your Password"
                  />
                  <Typography variant="caption" className="inputError">
                    {errors.password && "Please Enter maximun 8 number"}
                  </Typography>

                  <Typography variant="subtitle1">Conform Password</Typography>
                  <input
                    name="ConformPassword"
                    type="password"
                    ref={register({
                      validate: (value) =>
                        value === password.current ||
                        "The passwords do not match",
                    })}
                    className="authInput"
                    placeholder="Enter Your Conform Password"
                  />
                  <Typography variant="caption" className="inputError">
                    {errors.ConformPassword && "Don't match password"}
                  </Typography>
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className="signUpButton"
                >
                  Sign In
                </Button>
              </form>
              <Typography variant="subtitle2">
                Have an account?
                <Link to="/login" style={{ color: "#fff", marginLeft: "6px" }}>
                  SignIn
                </Link>
              </Typography>

              <div
                style={{
                  position: "absolute",
                  top: "10px ",
                  right: "10px",
                }}
              >
                <BackButton style={{ color: "#fff" }} />
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SignUp;
