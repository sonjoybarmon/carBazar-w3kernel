import {
  Card,
  Container,
  Grid,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import React, { useContext } from "react";
import { driverInfo } from "../../../Contexts/ContextDriver";

const Driver = () => {
  const [driver] = useContext(driverInfo);
  console.log(driver);
  return (
    <Container>
      <Grid container item md={12} spacing={2}>
        {driver &&
          driver.map((el) => (
            <Grid key={el._id} item md={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  title="choose any car"
                  image={el.image}
                />
                <CardContent>
                  <Typography variant="subtitle1">{el.fullName}</Typography>
                  <Typography variant="subtitle1">Email :{el.email}</Typography>
                  <Typography variant="subtitle1">Phone :{el.phone}</Typography>
                  <Typography variant="subtitle1">City: {el.city}</Typography>
                  <div style={{ display: "flex" }}>
                    {el.skill.map((el) => (
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
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Driver;
