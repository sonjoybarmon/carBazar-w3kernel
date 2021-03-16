import { Button, Container, Grid, Typography } from "@material-ui/core";
import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Card } from "ui-glassmorphism";
import axios from "axios";
import "../Dashboard.scss";

const AddDriver = () => {
  const [driver, setDriver] = useState({
    first_name: "",
    last_name: "",
    fullName: "",
    experience_level: "",
    student: "",
    city: "",
    state: "",
    zip_Code: "",
    phone: "",
    email: "",
    image: "",
    skill: [],
  });
  const { register, errors, handleSubmit, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = (data) => {
    fetch("https://safe-bastion-79755.herokuapp.com/driver", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(driver),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("your driver successful");
        }
      });
    // axios
    //   .post("https://safe-bastion-79755.herokuapp.com/driver", {
    //     driver,
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   });

    setDriver({
      first_name: "",
      last_name: "",
      fullName: "",
      experience_level: "",
      student: "",
      city: "",
      state: "",
      zip_Code: "",
      phone: "",
      email: "",
      image: "",
      skill: [],
    });
  };

  const handleChange = (prop) => (event) => {
    setDriver({ ...driver, [prop]: event.target.value });
  };

  console.log(driver);
  return (
    <div className="">
      <Container>
        <Grid container item md={12}>
          <Grid md={1} item></Grid>
          <Grid md={9} item>
            <Card className="Driver_section" style={{ position: "relative" }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h6">Add Driver</Typography>
                <div className="driver_input_wrapper">
                  <Grid container item md={12} spacing={1}>
                    <Grid item md={6}>
                      <input
                        name="first_name"
                        ref={register({ required: true })}
                        className="driver_input"
                        placeholder="Enter first name"
                        value={driver.first_name}
                        onChange={handleChange("first_name")}
                      />
                      <Typography variant="caption" className="inputError">
                        {errors.first_name && "first name is required"}
                      </Typography>
                    </Grid>
                    <Grid item md={6}>
                      <input
                        name="last_name"
                        ref={register({ required: true })}
                        className="driver_input"
                        placeholder="Enter last name year"
                        value={driver.last_name}
                        onChange={handleChange("last_name")}
                      />
                      <Typography variant="caption" className="inputError">
                        {errors.fuel_type && "last_name is required"}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container item md={12} spacing={1}>
                    <Grid item md={6}>
                      <input
                        name="fullName"
                        ref={register({ required: true })}
                        className="driver_input"
                        placeholder="Enter full Name name"
                        value={driver.fullName}
                        onChange={handleChange("fullName")}
                      />
                      <Typography variant="caption" className="inputError">
                        {errors.fullName && "full Name is required"}
                      </Typography>
                    </Grid>
                    <Grid item md={6}>
                      <input
                        name="experience"
                        ref={register({ required: true })}
                        className="driver_input"
                        placeholder="drive experience"
                        value={driver.experience}
                        onChange={handleChange("experience")}
                      />
                      <Typography variant="caption" className="inputError">
                        {errors.experience && "experience is required"}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container item md={12} spacing={1}>
                    <Grid item md={6}>
                      <input
                        name="student"
                        ref={register({ required: true })}
                        className="driver_input"
                        placeholder="Are you student Yes or No"
                        value={driver.student}
                        onChange={handleChange("student")}
                      />
                      <Typography variant="caption" className="inputError">
                        {errors.student && "student is required"}
                      </Typography>
                    </Grid>
                    <Grid item md={6}>
                      <input
                        name="city"
                        ref={register({ required: true })}
                        className="driver_input"
                        placeholder="city"
                        value={driver.city}
                        onChange={handleChange("city")}
                      />
                      <Typography variant="caption" className="inputError">
                        {errors.city && "city is required"}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container item md={12} spacing={1}>
                    <Grid item md={6}>
                      <input
                        name="state"
                        ref={register({ required: true })}
                        className="driver_input"
                        placeholder="Enter state"
                        value={driver.state}
                        onChange={handleChange("state")}
                      />
                      <Typography variant="caption" className="inputError">
                        {errors.state && "state is required"}
                      </Typography>
                    </Grid>
                    <Grid item md={6}>
                      <input
                        name="zip_Code"
                        ref={register({ required: true })}
                        className="driver_input"
                        placeholder="Zip Code"
                        value={driver.zip_Code}
                        onChange={handleChange("zip_Code")}
                      />
                      <Typography variant="caption" className="inputError">
                        {errors.zip_Code && "zip Code is required"}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container item md={12} spacing={1}>
                    <Grid item md={6}>
                      <input
                        name="phone"
                        ref={register({ required: true })}
                        className="driver_input"
                        placeholder="Enter phone Number"
                        value={driver.phone}
                        onChange={handleChange("phone")}
                      />
                      <Typography variant="caption" className="inputError">
                        {errors.phone && "phone is required"}
                      </Typography>
                    </Grid>
                    <Grid item md={6}>
                      <input
                        name="email"
                        ref={register({ required: true })}
                        className="driver_input"
                        placeholder="Enter your email"
                        value={driver.email}
                        onChange={handleChange("email")}
                      />
                      <Typography variant="caption" className="inputError">
                        {errors.email && "email is required"}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container item md={12} spacing={1}>
                    <input
                      name="image"
                      ref={register({ required: true })}
                      className="driver_input"
                      placeholder="Enter your image url"
                      value={driver.image}
                      onChange={handleChange("image")}
                    />
                    <Typography variant="caption" className="inputError">
                      {errors.image && "image is required"}
                    </Typography>
                  </Grid>
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className="signUpButton"
                  size="small"
                >
                  Create
                </Button>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AddDriver;
