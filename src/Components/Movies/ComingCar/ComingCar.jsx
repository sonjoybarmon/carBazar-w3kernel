import {
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
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

const ComingCar = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://safe-bastion-79755.herokuapp.com/coming`)
      .then((res) => setData(res.data))
      .then((err) => console.log(err));
  }, []);

  return (
    <Container style={{ padding: "30px 0" }}>
      <Grid item md={12}>
        <Typography
          variant="h5"
          style={{ textAlign: "center", margin: "20px 0 40px 0" }}
        >
          Our Coming Cars
        </Typography>
      </Grid>
      <Carousel
        responsive={responsive}
        autoPlaySpeed={2000}
        infinite={true}
        // showDots={true}
        autoPlay={true}
      >
        {data &&
          data.map((el) => (
            <div key={el.id} style={{ padding: "10px " }}>
              <Card style={{ boxShadow: "none" }}>
                <CardMedia
                  component="img"
                  image={el.image}
                  alt="coming car"
                  //   height="100"
                  style={{ width: "80%" }}
                />
              </Card>
            </div>
          ))}
      </Carousel>
    </Container>
  );
};

export default ComingCar;
