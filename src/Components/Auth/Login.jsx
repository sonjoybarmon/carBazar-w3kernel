import { Button, Container, Grid, Typography } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Card } from "ui-glassmorphism";
import "ui-glassmorphism/dist/index.css";
import "./Login.scss";
import { Link, useHistory, useLocation } from "react-router-dom";
import BackButton from "../../Hoc/BackButton";
import { UserLogin } from "../../Contexts/ContextAuth/ContextLogin";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../Contexts/ContextAuth/firebaseConfig";
// import firebaseConfig from "../firebaseConfig";

const Login = () => {
  const [login, setLogin] = useContext(UserLogin);
  const { register, errors, handleSubmit } = useForm();
  const [check, setCheck] = React.useState(false);

  const [user, setUser] = useState({});

  const handleChange = (prop) => (event) => {
    setUser({ ...user, [prop]: event.target.value });
  };

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const googleLogIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, photoURL, email } = result.user;
        const googleNewUser = {
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setLogin(googleNewUser);
        localStorage.setItem("email", result.user.email);
        history.replace(from);
      })
      .catch(function (error) {
        const newUserInfo = { ...login };
        newUserInfo.message = error.message;
        setLogin(newUserInfo);
      });
  };

  const FacebookLogin = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then(function (result) {
        const { displayName, photoURL, email } = result.user;
        const googleNewUser = {
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setLogin(googleNewUser);
        localStorage.setItem("email", result.user.email);
        history.replace(from);
      })
      .catch(function (error) {
        const newUserInfo = { ...login };
        newUserInfo.message = error.message;
        setLogin(newUserInfo);
      });
  };

  // submit form all function
  const onSubmit = (e) => {
    if (user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = res.user;
          newUserInfo.error = "";
          newUserInfo.success = true;
          history.replace(from);
          setLogin(newUserInfo);
          localStorage.setItem("email", res.user.email);
          return newUserInfo;
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.message = error.message;
          newUserInfo.success = false;
          return newUserInfo;
        });
    }
  };

  return (
    <div className="authBg">
      <Container>
        <Grid
          container
          item
          md={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          {/* <Grid md={3} item></Grid> */}
          <Grid md={6} sm={12} xs={12} item>
            <Card className="login__Wrapper" style={{ position: "relative" }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h6">Sign In</Typography>
                <div style={{ margin: "10px 0" }}>
                  <Typography variant="subtitle1">Email</Typography>
                  <input
                    name="email"
                    ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
                    className="authInput"
                    placeholder="Enter Your Email"
                    value={user.email}
                    onChange={handleChange("email")}
                  />
                  <Typography variant="caption" className="inputError">
                    {errors.email && "Please Enter a valid email"}
                  </Typography>

                  <Typography variant="subtitle1">Password</Typography>
                  <input
                    name="password"
                    type="password"
                    ref={register({ required: true, minLength: 8 })}
                    className="authInput"
                    placeholder="Enter Your Password"
                    value={user.password}
                    onChange={handleChange("password")}
                  />
                  <Typography variant="caption" className="inputError">
                    {errors.password && "Please Enter maximun 8 number"}
                  </Typography>
                </div>
                <div className="check__forgot">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={check}
                        onChange={() => setCheck(!check)}
                        name="check"
                        color="primary"
                        style={{ color: "#ffffff" }}
                      />
                    }
                    label="Remember Me"
                  />
                  <Link to="/forgotPassword" className="linkStyle">
                    <Typography variant="subtitle2">
                      Forgot Password?
                    </Typography>
                  </Link>
                </div>

                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className="authButton"
                >
                  Sign In
                </Button>

                <Typography variant="subtitle2">
                  Don't have account?
                  <Link
                    to="/signup"
                    style={{ color: "#fff", marginLeft: "6px" }}
                  >
                    SignUp
                  </Link>
                </Typography>
                <Typography variant="body2">
                  <Link to="ChangePassword" className="linkStyle">
                    Change Password
                  </Link>
                </Typography>
                {/* <input type="submit"/> */}
              </form>

              <div className="facebook__Google">
                <Typography variant="subtitle1" style={{ margin: "5px" }}>
                  Or Sign in using google or facebook
                </Typography>

                <div className="ButtonSection">
                  <Button
                    variant="contained"
                    color="primary"
                    className="google btn"
                    onClick={FacebookLogin}
                  >
                    Continue with Facebook
                  </Button>
                  {/* <br /> */}
                  <Button
                    variant="contained"
                    color="primary"
                    className="facebook btn"
                    onClick={googleLogIn}
                  >
                    Continue with Google
                  </Button>
                </div>
              </div>

              <Button
                variant="contained"
                color="primary"
                size="small"
                style={{
                  position: "absolute",
                  top: "10px ",
                  right: "10px",
                }}
              >
                {/* <BackButton style={{ color: "#fff" }} /> */}
                <Link to="/" className="linkStyle">
                  Home
                </Link>
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
