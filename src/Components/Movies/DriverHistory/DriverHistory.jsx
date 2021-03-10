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
import { driverInfo } from "../../../Contexts/ContextRecommended";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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

const RecommendedMovies = () => {
  const [driver, setDriver] = useContext(driverInfo);
  console.log(driver);

  return (
    <Container>
      <Grid
        container
        item
        md={12}
        xl={12}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="h6">Driver List</Typography>
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
          {driver &&
            driver.map((el) => (
              <Card style={{ margin: "10px 5px" }}>
                <CardMedia component="img" title="" image={el.image} />
                <CardContent style={{ padding: "10px" }}>
                  <Typography variant="subtitle1">{el.fullName}</Typography>
                  <div style={{ display: "flex" }}>
                    {el.skill.map((el) => (
                      <Button>{el}</Button>
                    ))}
                  </div>
                  <Button variant="contained" color="primary" size="small">
                    Details
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
