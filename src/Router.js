import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChangePassword from "./Components/Auth/ChangePassword";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import Home from "./Components/Home/Home";
import CarDetails from "./Components/Movies/CarHistory/CarDetails";
import PrivateRoute from "./Components/Auth/PrivateRoute/PrivateRoute.jsx";
import Dashboard from "./Components/Dashboard/Deshboard";
import HomeCars from "./Components/Home/HomeCars";
import DriverDetails from "./Components/Movies/DriverHistory/DriverDetails";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        {/* auth pages route*/}
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/forgotPassword" component={ForgotPassword} />
        <Route exact path="/changePassword" component={ChangePassword} />

        {/* <Route exact path="/details/:_id" component={CarDetails} />
        <Route exact path="/driver/:_id" component={DriverDetails} /> */}
        <Route exact path="/cars" component={HomeCars} />

        <PrivateRoute exact path="/details/:_id">
          <CarDetails />
        </PrivateRoute>
        <PrivateRoute exact path="/driver/:_id">
          <DriverDetails />
        </PrivateRoute>

        {/* <Route exact path="/dashboard" component={Dashboard} /> */}
        <PrivateRoute exact path="/dashboard">
          <Dashboard />
        </PrivateRoute>

        <Route path="*">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100vh",
            }}
          >
            <h1 style={{ color: "red" }}>page is not found</h1>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
