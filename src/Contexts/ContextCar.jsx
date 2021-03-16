import React, { createContext, useEffect, useState } from "react";
const axios = require("axios");

export const carInfo = createContext();
const ContextCar = ({ children }) => {
  const [car, setCar] = useState([]);

  useEffect(() => {
    axios
      .get("https://safe-bastion-79755.herokuapp.com/car")
      .then((res) => {
        setCar(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <carInfo.Provider value={[car, setCar]}>{children}</carInfo.Provider>;
};

export default ContextCar;
