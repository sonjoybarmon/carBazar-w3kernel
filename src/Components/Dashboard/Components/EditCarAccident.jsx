import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import axios from "axios";
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

export default function EditCarAccident({ btnText, id }) {
  const [open, setOpen] = React.useState(false);
  const [car, setCar] = useState({
    name: "",
    image: "",
    data: "",
    cost: "",
  });

  useEffect(() => {
    axios
      .get(`https://safe-bastion-79755.herokuapp.com/accident/${id}`)
      .then((res) => {
        setCar(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    fetch(`https://safe-bastion-79755.herokuapp.com/accident/${id}`, {
      method: "PATCH",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(car),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    setOpen(false);
  };

  const handleChange = (prop) => (event) => {
    setCar({ ...car, [prop]: event.target.value });
  };
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
            <Typography variant="h6">edit car accident</Typography>

            <IconButton aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          <Grid container item md={12}>
            <Card style={{ backgroundColor: "transparent", border: "none" }}>
              <CardMedia
                component="img"
                height="250"
                title="choose any car"
                image={car.image}
              />
              <CardContent>
                <Typography variant="h6" style={{ margin: "10px 0" }}>
                  {car.name}
                </Typography>
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
              </CardContent>
            </Card>
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
