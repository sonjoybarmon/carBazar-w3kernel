import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import TextField from "@material-ui/core/TextField";
import { Grid, Typography } from "@material-ui/core";
export default class CreditCard extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Grid
          container
          item
          md={12}
          id="PaymentForm"
          style={{ padding: "30px 0" }}
        >
          <Grid item md={6} sm={12} xs={12}>
            <Cards
              cvc={this.state.cvc}
              expiry={this.state.expiry}
              focused={this.state.focus}
              name={this.state.name}
              number={this.state.number}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <form>
              <Typography variant="subtitle1">Card Number</Typography>
              <TextField
                variant="outlined"
                style={{ width: "300px", margin: "10px 0" }}
                type="tel"
                name="number"
                placeholder="Card Number"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <Typography variant="subtitle1">Enter Your Name</Typography>
              <TextField
                type="text"
                name="name"
                placeholder="Enter Your Name"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                variant="outlined"
                style={{ width: "300px", margin: "10px 0" }}
              />
              <Typography variant="subtitle1">CVC Number</Typography>
              <TextField
                type="text"
                name="cvc"
                placeholder="CVC Number"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                variant="outlined"
                style={{ width: "300px", margin: "10px 0" }}
              />
              <Typography variant="subtitle1">Expiry date</Typography>
              <TextField
                type="number"
                name="expiry"
                placeholder="Expiry date"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                variant="outlined"
                style={{ width: "300px", margin: "10px 0" }}
              />
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}
