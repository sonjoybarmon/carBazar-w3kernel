import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardMedia from "@material-ui/core/CardMedia";
import { Card, Container } from "@material-ui/core";
import axios from "axios";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MoviesSlider = () => {
  const [slide, setSlide] = useState([]);

  useEffect(() => {
    axios
      .get("https://safe-bastion-79755.herokuapp.com/slide")
      .then((res) => {
        setSlide(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(slide);

  return (
    <Container>
      <Carousel
        responsive={responsive}
        autoPlaySpeed={2000}
        infinite={true}
        showDots={true}
        autoPlay={true}
      >
        {slide &&
          slide.map((el) => (
            <Card style={{ margin: "10px 5px" }} key={el._id}>
              <CardMedia component="img" title="" image={el.image} />
            </Card>
          ))}
      </Carousel>
    </Container>
  );
};

export default MoviesSlider;
