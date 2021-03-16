import React, { createContext, useEffect, useState } from "react";
const axios = require("axios");
export const driverInfo = createContext();

const ContextRecommended = ({ children }) => {
  const [driver, setDriver] = useState([]);

  useEffect(() => {
    axios
      .get("https://safe-bastion-79755.herokuapp.com/driver")
      .then((res) => {
        setDriver(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <driverInfo.Provider value={[driver, setDriver]}>
      {children}
    </driverInfo.Provider>
  );
};

export default ContextRecommended;
