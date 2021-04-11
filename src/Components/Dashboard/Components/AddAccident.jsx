import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import axios from "axios";
import FileBase from "react-file-base64";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddAccident({ btnText, id }) {
  const [open, setOpen] = React.useState(false);
  const [file, setFile] = React.useState(null);
  const [car, setCar] = useState({
    // name: "",
    // image: "",
    // data: "",
    // cost: "",
  });

  useEffect(() => {}, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Handles file upload event and updates state
  const handleUpload = (event) => {
    setFile(event.target.files[0]);
  };
  console.log(file);

  const handleChange = (prop) => (event) => {
    setCar({ ...car, [prop]: event.target.value });
  };

  const handleSave = () => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", car.name);
    formData.append("data", car.data);
    formData.append("cost", car.cost);
    fetch("https://safe-bastion-79755.herokuapp.com/accident/", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });

    // fetch(`https://safe-bastion-79755.herokuapp.com/accident`, {
    //   method: "POST",
    //   // headers: { "content-Type": "application/json" },
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    setOpen(false);
  };
  console.log("add", car);
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        size="small"
      >
        {btnText}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleSave}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        style={{ zIndex: "999999" }}
        // fullWidth
      >
        <DialogTitle id="alert-dialog-slide-title">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography variant="h6">Add car accident</Typography>
            <IconButton aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          <Grid container item md={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Typography variant="subtitle1">Name </Typography>
              <TextField
                style={{ width: "90%", margin: "5px" }}
                variant="outlined"
                value={car.name}
                name="name"
                onChange={handleChange("name")}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Typography variant="subtitle1">Date </Typography>
              <TextField
                style={{ width: "90%", margin: "5px" }}
                variant="outlined"
                value={car.data}
                name="data"
                onChange={handleChange("data")}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Typography variant="subtitle1">Cost </Typography>
              <TextField
                style={{ width: "90%", margin: "5px" }}
                variant="outlined"
                value={car.cost}
                name="cost"
                onChange={handleChange("cost")}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Typography variant="subtitle1">image </Typography>
              {/* <input
                style={{ width: "90%", margin: "5px" }}
                // variant="outlined"
                // value={car.image}
                type="file"
                // name="image"
                onChange={handleUpload}
              /> */}
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setFile({ ...file, selectFile: base64 })
                }
              />
            </div>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
