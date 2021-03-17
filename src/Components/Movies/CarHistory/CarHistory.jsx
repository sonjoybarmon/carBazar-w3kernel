import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import React, { useContext } from "react";
import { carInfo } from "../../../Contexts/ContextCar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarInformation = () => {
  const [car, setCar] = useContext(carInfo);
  console.log(car);
  return (
    <Container>
      <Grid
        container
        item
        md={12}
        xl={12}
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "15px 0",
        }}
      >
        <Typography variant="h6">Car List</Typography>
        <Button variant="contained" color="primary">
          <Link to="/cars" className="linkStyle">
            see all
          </Link>
        </Button>
      </Grid>

      <>
        <Carousel
          responsive={responsive}
          autoPlaySpeed={2000}
          infinite={true}
          autoPlay={true}
        >
          {car &&
            car.map((el) => (
              <Card key={el._id} style={{ margin: "10px 5px" }}>
                <CardMedia
                  component="img"
                  height="200"
                  title=""
                  image={el.image}
                />
                <CardContent style={{ padding: "10px" }}>
                  <div style={{ display: "flex" }}>
                    <Typography variant="body2">Name : </Typography>
                    <Typography variant="body2">{el.name}</Typography>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Typography variant="body2">Model: </Typography>
                    <Typography variant="body2">{el.modal}</Typography>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Typography variant="body2">Price:</Typography>
                    <Typography variant="body2">{el.price}</Typography>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Typography variant="body2">Release date :</Typography>
                    <Typography variant="body2">{el.model_year}</Typography>
                  </div>

                  <Button
                    variant="contained"
                    color="primary"
                    // disabled
                    size="small"
                    style={{ color: "#fff", margin: "10px 0" }}
                  >
                    <Link to={`/details/${el._id}`} className="linkStyle">
                      Details
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
        </Carousel>
      </>
    </Container>
  );
};

export default CarInformation;
