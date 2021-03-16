import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./hotCars.scss";

const HotCars = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://safe-bastion-79755.herokuapp.com/hotCars`)
      .then((res) => setData(res.data))
      .then((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <Container>
      <Grid item md={12}>
        <Typography
          variant="h5"
          style={{ textAlign: "center", margin: "23px 0" }}
        >
          SHOP BODY STYLES FIT FOR YOUR LIFESTYLE
        </Typography>
      </Grid>
      <Grid container item md={12} spacing={3}>
        {data &&
          data.map((el) => (
            <Grid item md={3} sm={4} xs={6} key={el.id}>
              <Card className="hotCars">
                <CardMedia
                  component="img"
                  image={el.image}
                  alt="hots cars"
                  //   height="100"
                  style={{ width: "100px", margin: "0 auto" }}
                />
                <CardContent
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div>
                    <Typography variant="subtitle2">{el.name}</Typography>
                    <Typography variant="body2">({el.store})</Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default HotCars;
