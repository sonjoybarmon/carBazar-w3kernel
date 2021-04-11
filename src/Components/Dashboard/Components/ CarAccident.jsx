import {
  Card,
  Container,
  Grid,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { carInfo } from "../../../Contexts/ContextCar";
import EditIcon from "@material-ui/icons/Edit";
import EditCarAccident from "./EditCarAccident";
import AddAccident from "./AddAccident";
const CarAccident = () => {
  const [car, setCar] = useState([]);
  useEffect(() => {
    axios
      .get("https://safe-bastion-79755.herokuapp.com/accident")
      .then((res) => {
        setCar(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Grid container item md={12} spacing={2}>
        <Grid
          item
          md={12}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <AddAccident btnText={"Add Accident"} />
        </Grid>
        {car &&
          car.map((el) => (
            <Grid key={el._id} item md={6} style={{ position: "relative" }}>
              <Card>
                <CardMedia
                  component="img"
                  height="250"
                  title="choose any car"
                  image={el.image}
                />
                <CardContent>
                  <Typography variant="h6" style={{ margin: "10px 0" }}>
                    {el.name}
                  </Typography>
                  <Grid container item md={12}>
                    <Grid item md={6}>
                      {/* {el.cost &&
                        el.cost &&
                        el.cost.map((el) => <p>Date : {el.data}</p>)} */}
                      <p>Date : {el.data}</p>
                    </Grid>
                    <Grid item md={6}>
                      {/* {el.cost &&
                        el.cost &&
                        el.cost.map((el) => <p>Cost : {el.cost}</p>)} */}
                      <p>Cost : {el.cost}</p>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              <div
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  zIndex: "99999",
                }}
              >
                <EditCarAccident
                  // handleEdit={() => handleEdit(el._id)}
                  id={el._id}
                  btnText={<EditIcon />}
                />
                {/* <Button
                  onClick={handleEdit(el._id)}
                  variant="contained"
                  size="small"
                  color="primary"
                >
                  <EditIcon />
                </Button> */}
              </div>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default CarAccident;
