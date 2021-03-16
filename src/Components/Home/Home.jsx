import React from "react";
import CarSlider from "../Share/CarSlider/CarSlider";
import NavMenu from "../Share/NavMenu/NavMenu";
import CarHistory from "../Movies/CarHistory/CarHistory";
import DriverHistory from "../Movies/DriverHistory/DriverHistory";
import Footer from "../Share/Footer/Footer";
import UpdateCars from "../Movies/UpdateCars/UpdateCars";
import HotCars from "../Movies/HotCoars/HotCars";
import ComingCar from "../Movies/ComingCar/ComingCar";
import { Container } from "@material-ui/core";

const Home = () => {
  return (
    <div>
      <NavMenu />
      <CarSlider />
      <div style={{ padding: "30px 0" }}>
        <CarHistory />
      </div>

      <DriverHistory />
      <ComingCar />
      <Container>
        <UpdateCars />
      </Container>

      <HotCars />
      <Footer />
    </div>
  );
};

export default Home;
