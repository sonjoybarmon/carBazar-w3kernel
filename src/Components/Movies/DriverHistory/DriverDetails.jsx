import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../Share/Footer/Footer";
import NavMenu from "../../Share/NavMenu/NavMenu";
import axios from "axios";
import ProfileCard from "./ProfileCard";
const DriverDetails = () => {
  const { _id } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    axios
      .get(`https://safe-bastion-79755.herokuapp.com/driver/${_id}`)
      .then((res) => setDetails(res.data))
      .then((err) => console.log(err));
  }, []);
  console.log(details);
  return (
    <div>
      <NavMenu />
      <ProfileCard data={details} />
      <Footer />
    </div>
  );
};

export default DriverDetails;
