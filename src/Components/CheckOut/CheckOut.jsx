import React, { useEffect, useState } from "react";
import Footer from "../Share/Footer/Footer";
import NavMenu from "../Share/NavMenu/NavMenu";
import axios from "axios";
import { useParams } from "react-router-dom";
import CreditCard from "./CreditCard";

const CheckOut = () => {
  const { _id } = useParams();
  const [details, setDetails] = useState({});
  console.log(details);
  // https://safe-bastion-79755.herokuapp.com/
  useEffect(() => {
    axios
      .get(`https://safe-bastion-79755.herokuapp.com/car/${_id}/checkout`)
      .then((res) => setDetails(res.data))
      .then((err) => console.log(err));
  }, []);

  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <NavMenu />
      {/* hello i am check out page.. now what? {_id} */}
      <div style={{ width: "100%", height: "100%" }}>
        <CreditCard />
      </div>
      <Footer />
    </div>
  );
};

export default CheckOut;
