import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
import CheckOut from "./Components/CheckOut/CheckOut";
import ContactUs from "./Components/ContactUs/ContactUs";
import Demo from "./Demo";
import NotFount from "./Components/Share/NotFound/NotFount";
import ReactGA from "react-ga";
import { useEffect } from "react";

export default function Routes() {
  useEffect(() => {
    ReactGA.initialize("G-708QR0DB28");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        {/* auth pages route*/}
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/forgotPassword" component={ForgotPassword} />
        <Route exact path="/changePassword" component={ChangePassword} />
        <Route exact path="/cars" component={HomeCars} />
        <Route exact path="/addCard" component={CheckOut} />
        <Route exact path="/contact" component={ContactUs} />

        <PrivateRoute exact path="/details/:_id">
          <CarDetails />
        </PrivateRoute>
        <PrivateRoute exact path="/driver/:_id">
          <DriverDetails />
        </PrivateRoute>
        <PrivateRoute exact path="/dashboard">
          <Dashboard />
        </PrivateRoute>

        <Route path="/demo" component={Demo} />

        <Route path="*" component={NotFount} />
      </Switch>
    </Router>
  );
}
