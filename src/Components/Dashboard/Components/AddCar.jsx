import { Button, Container, Grid, Typography } from "@material-ui/core";
import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Card } from "ui-glassmorphism";
import { Link, useHistory, useLocation } from "react-router-dom";
import BackButton from "../../../Hoc/BackButton";
import "../Dashboard.scss";

const AddCar = () => {
  const history = useHistory();
  const location = useLocation();
  const [car, setCar] = useState({
    name: "",
    modal: "",
    balance: "",
    brand: "",
    edition: "",
    model_year: "",
    registration_year: "",
    condition: "",
    transmission: "",
    body_type: "",
    fuel_type: "",
    engine_capacity: "",
    kilometers_run: "",
    price: "",
    manufacturer: "",
    image: "",
    cost: {
      cost: [],
    },
    days: {
      carUse: [],
    },
    accident: {
      carAccident: [],
    },
    fullMonth: {
      cost: [],
    },
  });
  const { register, errors, handleSubmit, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    fetch("https://safe-bastion-79755.herokuapp.com/car", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("your car create successful");
        }
      });
    setCar({
      name: "",
      modal: "",
      balance: "",
      brand: "",
      edition: "",
      model_year: "",
      registration_year: "",
      condition: "",
      transmission: "",
      body_type: "",
      fuel_type: "",
      engine_capacity: "",
      kilometers_run: "",
      price: "",
      manufacturer: "",
      image: "",
      cost: {
        cost: [],
      },
      days: {
        carUse: [],
      },
      accident: {
        carAccident: [],
      },
      fullMonth: {
        cost: [],
      },
    });
  };

  const handleChange = (prop) => (event) => {
    setCar({ ...car, [prop]: event.target.value });
  };
  return (
    <div className="">
      <Container>
        <Grid container item md={12}>
          <Grid md={1} item></Grid>
          <Grid md={9} item>
            <Card className="car_section" style={{ position: "relative" }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h6">Add Car</Typography>
                <div className="car_input_wrapper">
                  <Grid item md={12}>
                    <input
                      name="name"
                      ref={register({ required: true })}
                      className="Car_input"
                      placeholder="Car Name"
                      value={car.name}
                      onChange={handleChange("name")}
                    />
                    <Typography variant="caption" className="inputError">
                      {errors.name && "First name is required"}
                    </Typography>
                  </Grid>

                  <Grid container item md={12} spacing={1}>
                    <Grid item md={6}>
                      <input
                        name="modal"
                        ref={register({ required: true })}
                        className="Car_input"
                        placeholder="Model"
                        value={car.modal}
                        onChange={handleChange("modal")}
                      />
                      <Typography variant="caption" className="inputError">
                        {errors.modal && "First model is required"}
                      </Typography>
                    </Grid>
                    <Grid item md={6}>
                      <input
                        name="balance"
                        ref={register({ required: true })}
                        className="Car_input"
                        placeholder="Balance"
                        value={car.balance}
                        onChange={handleChange("balance")}
                      />
                      <Typography variant="caption" className="inputError">
                        {errors.balance && "First balance is required"}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container item md={12} spacing={1}>
                    <Grid item md={6}>
                      <input
                        name="brand"
                        ref={register({ required: true })}
                        className="Car_input"
                        placeholder="Brand"
                        value={car.brand}
                        onChange={handleChange("brand")}
                      />
                      <Typography variant="caption" className="inputError">
                        {errors.brand && "First brand is required"}
                      </Typography>
                    </Grid>
                    <Grid item md={6}>
                      <input
                        name="edition"
                        ref={register({ required: true })}
                        className="Car_input"
                        placeholder="Edition"
                        value={car.edition}
                        onChange={handleChange("edition")}
                      />
                      <Typography variant="caption" className="inputError">
                        {errors.edition && "First edition is required"}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container item md={12} spacing={1}>
                    <Grid item md={6}>
                      <input
                        name="model_year"
                        ref={register({ required: true })}
                        className="Car_input"
                        placeholder="model year"
                        value={car.model_year}
                        onChange={handleChange("model_year")}
                      />
                      <Typography variant="caption" className="inputError">
                        {errors.model_year && "First model_year is required"}
                      </Typography>
                    </Grid>
                    <Grid item md={6}>
                      <input
                        name="registration_year"
                        ref={register({ required: true })}
                        className="Car_input"
                        placeholder="registration"
                        value={car.registration_year}
                        onChange={handleChange("registration_year")}
                      />
                      <Typography variant="caption" className="inputError">
                        {errors.registration_year &&
                          "First registration year is required"}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container item md={12} spacing={1}>
                    <Grid item md={6}>
                      <input
                        name="condition"
                        ref={register({ required: true })}
                        className="Car_input"
                        placeholder="condition"
                        value={car.condition}
                        onChange={handleChange("condition")}
                      />
                      <Typography variant="caption" className="inputError">
                        {errors.condition && "First condition is required"}
                      </Typography>
                    </Grid>
                    <Grid item md={6}>
                      <input
                        name="transmission"
                        ref={register({ required: true })}
                        className="Car_input"
                        placeholder="transmission"
                        value={car.transmission}
                        onChange={handleChange("transmission")}
                      />
                      <Typography variant="caption" className="inputError">
                        {errors.transmission &&
                          "First transmission is required"}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container item md={12} spacing={1}>
                    <Grid item md={6}>
                      <input
                        name="body_type"
                        ref={register({ required: true })}
                        className="Car_input"
                        placeholder="body type"
                        value={car.body_type}
                        onChange={handleChange("body_type")}
                      />
                      <Typography variant="caption" className="inputError">
                        {errors.body_type && "First body type is required"}
                      </Typography>
                    </Grid>
                    <Grid item md={6}>
                      <input
                        name="fuel_type"
                        ref={register({ required: true })}
                        className="Car_input"
                        placeholder="fuel type"
                        value={car.fuel_type}
                        onChange={handleChange("fuel_type")}
                      />
                      <Typography variant="caption" className="inputError">
                        {errors.fuel_type && "First fuel type is required"}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container item md={12} spacing={1}>
                    <Grid item md={6}>
                      <input
                        name="engine_capacity"
                        ref={register({ required: true })}
                        className="Car_input"
                        placeholder="engine capacity "
                        value={car.engine_capacity}
                        onChange={handleChange("engine_capacity")}
                      />
                      <Typography variant="caption" className="inputError">
                        {errors.engine_capacity &&
                          "First engine capacity is required"}
                      </Typography>
                    </Grid>
                    <Grid item md={6}>
                      <input
                        name="kilometers_run"
                        ref={register({ required: true })}
                        className="Car_input"
                        placeholder="kilometers run"
                        value={car.kilometers_run}
                        onChange={handleChange("kilometers_run")}
                      />
                      <Typography variant="caption" className="inputError">
                        {errors.kilometers_run &&
                          "First kilometers_run is required"}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container item md={12} spacing={1}>
                    <Grid item md={6}>
                      <input
                        name="price"
                        ref={register({ required: true })}
                        className="Car_input"
                        placeholder="Enter price "
                        value={car.price}
                        onChange={handleChange("price")}
                      />
                      <Typography variant="caption" className="inputError">
                        {errors.price && "First price is required"}
                      </Typography>
                    </Grid>
                    <Grid item md={6}>
                      <input
                        name="manufacturer"
                        ref={register({ required: true })}
                        className="Car_input"
                        placeholder="manufacturer "
                        value={car.manufacturer}
                        onChange={handleChange("manufacturer")}
                      />
                      <Typography variant="caption" className="inputError">
                        {errors.manufacturer &&
                          "First manufacturer is required"}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container item md={12} spacing={1}>
                    <input
                      name="image"
                      ref={register({ required: true })}
                      className="Car_input"
                      placeholder="Enter image link "
                      value={car.image}
                      onChange={handleChange("image")}
                    />
                    <Typography variant="caption" className="inputError">
                      {errors.image && "First image is required"}
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

export default AddCar;
