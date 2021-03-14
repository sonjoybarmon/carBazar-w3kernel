import {
  Card,
  Container,
  Grid,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import { carInfo } from "../../../Contexts/ContextCar";

const CarAccident = () => {
  const [car] = useContext(carInfo);
  console.log(car && car);
  return (
    <Container>
      <Grid container item md={12} spacing={2}>
        {car &&
          car.map((el) => (
            <Grid key={el._id} item md={6}>
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
                      {el.accident &&
                        el.accident.carAccident[0] &&
                        el.accident.carAccident[0].date &&
                        el.accident.carAccident[0].date.map((el) => (
                          <p>Date : {el}</p>
                        ))}
                    </Grid>
                    <Grid item md={6}>
                      {el.fullMonth &&
                        el.fullMonth.cost[0] &&
                        el.fullMonth.cost[0].accident &&
                        el.fullMonth.cost[0].accident.map((el) => (
                          <p>Cost : {el}</p>
                        ))}
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default CarAccident;
