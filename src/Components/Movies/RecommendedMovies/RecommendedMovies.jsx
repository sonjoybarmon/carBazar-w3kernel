import {
  Grid,
  Typography,
  Button,
  Container,
  Card,
  CardMedia,
} from "@material-ui/core";
import React, { useContext } from "react";
import CardContent from "@material-ui/core/CardContent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { recommendMovies } from "../../../Contexts/ContextRecommended";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
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

const RecommendedMovies = () => {
  const [Movies, setMovies] = useContext(recommendMovies);
  console.log(Movies);

  return (
    <Container>
      <Grid
        container
        item
        md={12}
        xl={12}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="h6">RecommendedMovies</Typography>
        <Button variant="contained" color="primary">
          see all
        </Button>
      </Grid>

      <>
        <Carousel
          responsive={responsive}
          autoPlaySpeed={2000}
          infinite={true}
          // showDots={true}
          autoPlay={true}
        >
          {Movies &&
            Movies.map((el) => (
              <Card style={{ margin: "10px 5px" }}>
                <CardMedia component="img" title="" image={el.image} />
                <CardContent style={{ padding: "10px" }}>
                  <Typography variant="subtitle1">{el.name}</Typography>
                  <div style={{ display: "flex" }}>
                    <Typography variant="body2">{el.start_time}</Typography>
                    <span>-</span>
                    <Typography variant="body2">{el.end_time}</Typography>
                  </div>
                  <Button variant="contained" color="primary" size="small">
                    book a sit
                  </Button>
                </CardContent>
              </Card>
            ))}
        </Carousel>
      </>
    </Container>
  );
};

export default RecommendedMovies;
