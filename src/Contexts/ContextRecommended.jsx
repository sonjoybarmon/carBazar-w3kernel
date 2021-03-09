import React, { createContext, useEffect, useState } from "react";
const axios = require("axios");
export const recommendMovies = createContext();

const ContextRecommended = ({ children }) => {
  const [recommendMovie, setRecommendMovie] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/RecommendedMovies")
      .then((res) => {
        setRecommendMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <recommendMovies.Provider value={[recommendMovie, setRecommendMovie]}>
      {children}
    </recommendMovies.Provider>
  );
};

export default ContextRecommended;

// https://i.ibb.co/SymStWY/Tom-Jerry.jpg
// https://i.ibb.co/gwW0sjD/The-Vigil.jpg
// https://i.ibb.co/mT175X2/The-Marksman.jpg
// https://i.ibb.co/YbkQ4BR/Prem-Tame.jpg
// https://i.ibb.co/xDDcPjQ/Miss-Call.jpg
// https://i.ibb.co/FBFJVkg/Magic.jpg
// https://i.ibb.co/2M4Bvzn/Dictionary.jpg
// https://i.ibb.co/McWBm9V/Chini.jpg
// https://i.ibb.co/bL7nYhQ/Check.jpg
// https://i.ibb.co/PFnFbzF/Chakra-ka-Rakshak.jpg
