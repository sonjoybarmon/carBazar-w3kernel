import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../Share/Footer/Footer";
import NavMenu from "../../Share/NavMenu/NavMenu";
import { Grid, Typography, Button } from "@material-ui/core";
import "./History.css";
import ImageMagnifiers from "../../../Hoc/ImageMagnifiers";
import { GlassMagnifier } from "react-image-magnifiers";
const CarDetails = () => {
  const { _id } = useParams();
  const [details, setDetails] = useState({});
  console.log(details);

  useEffect(() => {
    axios
      .get(`https://safe-bastion-79755.herokuapp.com/details/${_id}`)
      .then((res) => setDetails(res.data))
      .then((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavMenu />

      <Grid container item md={12} style={{ padding: "10px 0" }}>
        <Grid item md={5}>
          <div
            style={{
              width: "95%",
            }}
          >
            <img
              src={details.image}
              alt=""
              style={{
                width: "100%",
              }}
            />
            {/* <GlassMagnifier
              imageSrc={details.image}
              imageAlt="car image"
              allowOverflow
              Shape="circle"
              MagnifierSize="30%"
              BorderSize="5"
              BorderColor="rgba(255,255,255,.5)"
            /> */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Button variant="contained" color="primary">
                <Link to={`/addCard`} className="linkStyle">
                  Buy Car
                </Link>
              </Button>
            </div>
          </div>
        </Grid>

        <Grid item md={7} className="carHistory">
          <Grid container md={12} style={{ margin: "10px 0" }}>
            <Grid item md={3}>
              <Typography variant="h6">Name :</Typography>
            </Grid>
            <Grid item md={9}>
              <Typography variant="h6" style={{ fontWeight: "600" }}>
                {details.name}
              </Typography>
            </Grid>
          </Grid>

          <Grid container md={12} style={{ margin: "10px 0" }}>
            <Grid item md={3}>
              <Typography variant="h6">Model :</Typography>
            </Grid>
            <Grid item md={9}>
              <Typography variant="subtitle1">{details.modal}</Typography>
            </Grid>
          </Grid>

          <Grid container md={12} style={{ margin: "10px 0" }}>
            <Grid item md={3}>
              <Typography variant="h6">release date :</Typography>
            </Grid>
            <Grid item md={9}>
              <Typography variant="subtitle1">{details.model_year}</Typography>
            </Grid>
          </Grid>

          <Grid container md={12} style={{ margin: "10px 0" }}>
            <Grid item md={3}>
              <Typography variant="h6">Price :</Typography>
            </Grid>
            <Grid item md={9}>
              <Typography variant="subtitle1" style={{ fontWeight: "600" }}>
                Tk {details.price}
              </Typography>
            </Grid>
          </Grid>

          <Grid container md={12} style={{ margin: "10px 0" }}>
            <Grid item md={3}>
              <Typography variant="h6">Transmission :</Typography>
            </Grid>
            <Grid item md={9}>
              <Typography variant="subtitle1">
                {details.transmission}
              </Typography>
            </Grid>
          </Grid>

          <Grid container md={12} style={{ margin: "10px 0" }}>
            <Grid item md={3}>
              <Typography variant="h6">Manufacturer :</Typography>
            </Grid>
            <Grid item md={9}>
              <Typography variant="subtitle1">
                {details.manufacturer}
              </Typography>
            </Grid>
          </Grid>

          <Grid container md={12} style={{ margin: "10px 0" }}>
            <Grid item md={3}>
              <Typography variant="h6">Kilometers Run :</Typography>
            </Grid>
            <Grid item md={9}>
              <Typography variant="subtitle1">
                {details.kilometers_run}
              </Typography>
            </Grid>
          </Grid>

          <Grid container md={12} style={{ margin: "10px 0" }}>
            <Grid item md={3}>
              <Typography variant="h6">Fuel Type :</Typography>
            </Grid>
            <Grid item md={9}>
              <Typography variant="subtitle1">{details.fuel_type}</Typography>
            </Grid>
          </Grid>

          <Grid container md={12} style={{ margin: "10px 0" }}>
            <Grid item md={3}>
              <Typography variant="h6">Engine Capacity :</Typography>
            </Grid>
            <Grid item md={9}>
              <Typography variant="subtitle1">
                {details.engine_capacity}
              </Typography>
            </Grid>
          </Grid>

          <Grid container md={12} style={{ margin: "10px 0" }}>
            <Grid item md={3}>
              <Typography variant="h6">Body Type :</Typography>
            </Grid>
            <Grid item md={9}>
              <Typography variant="subtitle1">{details.body_type}</Typography>
            </Grid>
          </Grid>

          <Grid container md={12} style={{ margin: "10px 0" }}>
            <Grid item md={3}>
              <Typography variant="h6">Condition :</Typography>
            </Grid>
            <Grid item md={9}>
              <Typography variant="subtitle1">{details.condition}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
};

export default CarDetails;
