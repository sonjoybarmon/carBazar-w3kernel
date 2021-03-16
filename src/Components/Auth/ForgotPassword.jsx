import { Button, Container, Grid, Typography } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Card } from "ui-glassmorphism";
import "ui-glassmorphism/dist/index.css";
import { UserLogin } from "../../Contexts/ContextAuth/ContextLogin";
import BackButton from "../../Hoc/BackButton";
import "./ForgotPassword.scss";

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../Contexts/ContextAuth/firebaseConfig";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const ForgotPassword = () => {
  const [login] = useContext(UserLogin);
  const { register, errors, handleSubmit } = useForm();
  const [email, setEmail] = useState("");

  const onSubmit = (data) => {
    forgotPassword(toString(email));
  };

  const forgotPassword = (Email) => {
    firebase
      .auth()
      .sendPasswordResetEmail(Email)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(email);

  return (
    <div className="forgotBg">
      <Container>
        <Grid container item md={12} className="forgot_wrapper">
          <Grid item md={3}></Grid>
          <Grid item md={6}>
            <Card className="forgotCard" style={{ position: "relative" }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h5" style={{ margin: "20px 0" }}>
                  Forgot password
                </Typography>
                <Typography variant="subtitle1" style={{ margin: "10px 0" }}>
                  Please check your email inbox and click on the link to reset
                  your password
                </Typography>

                <div>
                  <input
                    name="email"
                    ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
                    className="authInput"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    // disabled
                  />
                  <Typography variant="caption" className="inputError">
                    {errors.email && "Please Enter a valid email"}
                  </Typography>
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className="authButton"
                  //   onClick={forgotPassword(toString(email))}
                >
                  Sign In
                </Button>
              </form>
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

export default ForgotPassword;
