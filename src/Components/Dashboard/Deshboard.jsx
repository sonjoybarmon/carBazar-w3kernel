import {
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import {
  NavLink,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import Footer from "../Share/Footer/Footer";
import NavMenu from "../Share/NavMenu/NavMenu";
import CarAccident from "./Components/ CarAccident";
import Cars from "./Components/Cars";
import Driver from "./Components/Driver";
import PatrolCost from "./Components/PatrolCost";
import AddCar from "./Components/AddCar";
import AddDriver from "./Components/AddDriver";
import TotalCost from "./Components/TotalCost";
import { UserLogin } from "../../Contexts/ContextAuth/ContextLogin";

const Dashboard = () => {
  const [login] = useContext(UserLogin);

  return (
    <div>
      <NavMenu />
      <Container style={{ margin: "20px 0" }}>
        <Router>
          <Grid container item md={12}>
            <Grid item md={4} sm={4}>
              <Card
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent>
                  <NavLink to="/dashboard/cars" activeClassName="activeText">
                    - Cars
                  </NavLink>
                  <Divider style={{ margin: "10px 0" }} />
                  <NavLink to="/dashboard/drivers" activeClassName="activeText">
                    - Driver
                  </NavLink>
                  <Divider style={{ margin: "10px 0" }} />
                  <NavLink
                    to="/dashboard/accident"
                    activeClassName="activeText"
                  >
                    - Car Accident
                  </NavLink>
                  <Divider style={{ margin: "10px 0" }} />
                  <NavLink
                    to="/dashboard/patrolCost"
                    activeClassName="activeText"
                  >
                    - Car Patrol
                  </NavLink>
                  <Divider style={{ margin: "10px 0" }} />
                  <NavLink
                    to="/dashboard/totalCost"
                    activeClassName="activeText"
                  >
                    - Total Cost
                  </NavLink>
                  <Divider style={{ margin: "10px 0" }} />
                  <NavLink to="/dashboard/addCar" activeClassName="activeText">
                    - Add Car
                  </NavLink>
                  <Divider style={{ margin: "10px 0" }} />
                  <NavLink
                    to="/dashboard/addDriver"
                    activeClassName="activeText"
                  >
                    - Add Driver
                  </NavLink>
                  <Divider style={{ margin: "10px 0" }} />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {login && login.photo && (
                      <div style={{ margin: "20px " }}>
                        <img src={login && login.photo} alt="user" />
                      </div>
                    )}
                    {login && login.name && (
                      <Typography variant="caption">
                        - {login && login.name}
                      </Typography>
                    )}
                    <Typography variant="caption">
                      - {localStorage.getItem("email") || login.email}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={8} sm={8}>
              <Switch>
                <Route exact path="/dashboard">
                  <div>
                    <Cars />
                  </div>
                </Route>
                <Route exact path="/dashboard/cars">
                  <div>
                    <Cars />
                  </div>
                </Route>
                <Route exact path="/dashboard/drivers">
                  <Driver />
                </Route>
                <Route exact path="/dashboard/accident">
                  <CarAccident />
                </Route>
                <Route exact path="/dashboard/patrolCost">
                  <PatrolCost />
                </Route>
                <Route exact path="/dashboard/totalCost">
                  <TotalCost />
                </Route>
                <Route exact path="/dashboard/addCar">
                  <AddCar />
                </Route>
                <Route exact path="/dashboard/addDriver">
                  <AddDriver />
                </Route>
              </Switch>
            </Grid>
          </Grid>
        </Router>
      </Container>
      <Footer />
    </div>
  );
};

export default Dashboard;
