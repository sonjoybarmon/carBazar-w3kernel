import axios from "axios";
import React, { useEffect, useState } from "react";

const CardData = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:4000/card")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div></div>;
};

export default CardData;
