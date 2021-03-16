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
import { carInfo } from "../../Contexts/ContextCar";
import Footer from "../Share/Footer/Footer";
import NavMenu from "../Share/NavMenu/NavMenu";

const HomeCars = () => {
  const [car] = useContext(carInfo);
  console.log(car);
  return (
    <div>
      <NavMenu />
      <Container style={{ padding: "10px 0" }}>
        <Grid container item md={12} spacing={3}>
          {car &&
            car.map((el) => (
              <Grid key={el._id} item md={4} sm={6} xs={12}>
                <Link to={`/details/${el._id}`} className="linkStyle">
                  <Card>
                    <CardMedia
                      component="img"
                      height="250"
                      title="choose any car"
                      image={el.image}
                    />
                    <CardContent>
                      <Typography variant="h6">{el.name}</Typography>
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
      <Footer />
    </div>
  );
};

export default HomeCars;
