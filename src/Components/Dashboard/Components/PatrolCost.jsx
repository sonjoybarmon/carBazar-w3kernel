import {
  Card,
  Container,
  Grid,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import { carInfo } from "../../../Contexts/ContextCar";

const PatrolCost = () => {
  const [car] = useContext(carInfo);
  console.log(car && car);
  return (
    <Container>
      <Grid container item md={12} spacing={2}>
        {car &&
          car.map((el) => (
            <Grid key={el._id} item md={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="250"
                  title="choose any car"
                  image={el.image}
                />
                <CardContent>
                  <Typography variant="h6" style={{ margin: "10px 0" }}>
                    {el.name}
                  </Typography>
                  <>
                    {el.cost &&
                      el.cost.cost[0] &&
                      el.cost.cost[0].pactol &&
                      el.cost.cost[0].pactol.map((el, index) => (
                        <Typography variant="subtitle2">
                          {index + 1} Patrol Cost: {el}
                        </Typography>
                      ))}
                  </>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default PatrolCost;
