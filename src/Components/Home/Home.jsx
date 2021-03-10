import React from "react";
import CarSlider from "../Share/CarSlider/CarSlider";
import NavMenu from "../Share/NavMenu/NavMenu";
import CarHistory from "../Movies/CarHistory/CarHistory";
import DriverHistory from "../Movies/DriverHistory/DriverHistory";

const Home = () => {
  return (
    <div>
      <NavMenu />
      <CarSlider />
      <div style={{ padding: "30px 0" }}>
        <CarHistory />
      </div>

      <DriverHistory />
    </div>
  );
};

export default Home;
