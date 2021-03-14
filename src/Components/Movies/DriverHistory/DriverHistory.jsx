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
import { driverInfo } from "../../../Contexts/ContextDriver";
import { Link } from "react-router-dom";

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

const DriverHistory = () => {
  const [driver, setDriver] = useContext(driverInfo);
  console.log(driver);

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
              <Card key={el._id} style={{ margin: "10px 5px" }}>
                <CardMedia
                  component="img"
                  height="150"
                  title=""
                  image={el.image}
                />
                <CardContent style={{ padding: "30px 10px" }}>
                  <Typography variant="subtitle1">{el.fullName}</Typography>
                  <div style={{ display: "flex" }}>
                    {el.skill &&
                      el.skill.map((el) => (
                        <Button
                          disabled
                          variant="outlined"
                          size="small"
                          color="primary"
                          style={{ color: "#000", margin: "3px" }}
                        >
                          {el}
                        </Button>
                      ))}
                  </div>
                  <Button
                    variant="contained"
                    color="primary"
                    // disabled
                    size="small"
                    style={{ color: "#fff", marginTop: "15px" }}
                  >
                    <Link to={`/driver/${el._id}`} className="linkStyle">
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

export default DriverHistory;
