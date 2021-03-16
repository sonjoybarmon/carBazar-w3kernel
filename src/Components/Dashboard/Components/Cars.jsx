import {
  Card,
  Container,
  Grid,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { carInfo } from "../../../Contexts/ContextCar";

const Cars = () => {
  const [car] = useContext(carInfo);
  console.log(car);
  return (
    <Container>
      <Grid container item md={12} spacing={2}>
        {car &&
          car.map((el) => (
            <Grid key={el._id} item md={6} sm={12}>
              <Link to={`/details/${el._id}`}>
                <Card>
                  <CardMedia
                    component="img"
                    height="250"
                    title="choose any car"
                    image={el.image}
                  />
                  <CardContent>
                    <Typography variant="subtitle1">{el.name}</Typography>
                    <Typography variant="subtitle1">
                      Price :{el.price}
                    </Typography>
                    <Typography variant="subtitle1">
                      Transmission :{el.transmission}
                    </Typography>
                    <Typography variant="subtitle1">
                      Fuel Type: {el.fuel_type}
                    </Typography>
                    <Typography variant="subtitle1">
                      Made in :{el.manufacturer}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Cars;
