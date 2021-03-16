import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { db1, db2, db3, db4 } from "./db";

const UpdateCars = () => {
  return (
    <div>
      <Container style={{ padding: "20px 0" }}>
        <Grid
          container
          item
          md={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Typography variant="h5">Start with Make</Typography>
        </Grid>

        <Grid container item md={12} spacing={2} style={{ marginTop: "15px" }}>
          <Grid item md={3} sm={6} xs={6}>
            {db1 &&
              db1.map((el) => (
                <div>
                  <Link to="/" style={{ margin: "5px" }}>
                    {el}
                  </Link>
                </div>
              ))}
          </Grid>
          <Grid item md={3} sm={6} xs={6}>
            {db1 &&
              db2.map((el) => (
                <div>
                  <Link to="/" style={{ margin: "5px" }}>
                    {el}
                  </Link>
                </div>
              ))}
          </Grid>
          <Grid item md={3} sm={6} xs={6}>
            {db1 &&
              db3.map((el) => (
                <div>
                  <Link to="/" style={{ margin: "5px" }}>
                    {el}
                  </Link>
                </div>
              ))}
          </Grid>
          <Grid item md={3} sm={6} xs={6}>
            {db1 &&
              db4.map((el) => (
                <div>
                  <Link to="/" style={{ margin: "5px" }}>
                    {el}
                  </Link>
                </div>
              ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default UpdateCars;
