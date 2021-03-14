import { Typography, Button } from "@material-ui/core";
import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ data }) => {
  return (
    <div className="profile__card">
      <div className="profile-card">
        <header>
          <a>
            <img src={data.image} className="hoverZoomLink" alt="" />
          </a>

          <Typography variant="h6">{data.fullName}</Typography>

          <Typography variant="subtitle1">I am a Good Driver</Typography>
        </header>

        <div>
          <div style={{ width: "100%", padding: "0 10px", display: "flex" }}>
            <div style={{ width: "40%" }}>
              <Typography variant="subtitle1">Email :</Typography>
            </div>
            <div style={{ width: "60%" }}>
              <Typography variant="subtitle2">{data.email}</Typography>
            </div>
          </div>
          <div style={{ width: "100%", padding: "0 10px", display: "flex" }}>
            <div style={{ width: "40%" }}>
              <Typography variant="subtitle1">Phone :</Typography>
            </div>
            <div style={{ width: "60%" }}>
              <Typography variant="subtitle2">{data.phone}</Typography>
            </div>
          </div>
          <div style={{ width: "100%", padding: "0 10px", display: "flex" }}>
            <div style={{ width: "40%" }}>
              <Typography variant="subtitle1">Experience:</Typography>
            </div>
            <div style={{ width: "60%" }}>
              <Typography variant="subtitle2">
                {data.experience_level}
              </Typography>
            </div>
          </div>
          <div style={{ width: "100%", padding: "0 10px", display: "flex" }}>
            <div style={{ width: "40%" }}>
              <Typography variant="subtitle1">City :</Typography>
            </div>
            <div style={{ width: "60%" }}>
              <Typography variant="subtitle2">{data.city}</Typography>
            </div>
          </div>
          <div style={{ width: "100%", padding: "0 10px", display: "flex" }}>
            <div style={{ width: "40%" }}>
              <Typography variant="subtitle1">Zip Code :</Typography>
            </div>
            <div style={{ width: "60%" }}>
              <Typography variant="subtitle2">{data.zip_Code}</Typography>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: "10px" }}>
            {data &&
              data.skill &&
              data.skill.map((el) => (
                <Button
                  disabled
                  variant="outlined"
                  size="small"
                  color="primary"
                  style={{ color: "#000", margin: "3px", fontSize: "12px" }}
                >
                  {el}
                </Button>
              ))}
          </div>

          {/* <Typography variant="subtitle1">Email : {data.email}</Typography>
          <Typography variant="subtitle1">Phone : {data.phone}</Typography>
          <Typography variant="subtitle1">
            Experience level : {data.experience_level}
          </Typography>
          <Typography variant="subtitle1">city : {data.city}</Typography>
          <Typography variant="subtitle1">
            Zip Code : {data.zip_Code}
          </Typography> */}
        </div>

        {/* <div className="profile-social-links"></div> */}
      </div>
    </div>
  );
};

export default ProfileCard;
