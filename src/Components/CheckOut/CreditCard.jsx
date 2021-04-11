import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import TextField from "@material-ui/core/TextField";
import { Container, Grid, Typography, Button } from "@material-ui/core";

const CreditCard = () => {
  const [newCard, setNewCard] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  const handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://safe-bastion-79755.herokuapp.com/card", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCard),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("your card create successful");
        }
      });

    setNewCard({
      cvc: "",
      expiry: "",
      focus: "",
      name: "",
      number: "",
    });
  };

  return (
    <div>
      <Container>
        <Grid
          container
          item
          md={12}
          id="PaymentForm"
          style={{ padding: "30px 0" }}
        >
          <Grid item md={6} sm={12} xs={12}>
            <Cards
              cvc={newCard.cvc}
              expiry={newCard.expiry}
              focused={newCard.focus}
              name={newCard.name}
              number={newCard.number}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <form onSubmit={handleSubmit}>
              <Typography variant="subtitle1">Card Number</Typography>
              <TextField
                variant="outlined"
                style={{ width: "70%", margin: "10px 0" }}
                type="tel"
                name="number"
                placeholder="Card Number"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <Typography variant="subtitle1">Enter Your Name</Typography>
              <TextField
                type="text"
                name="name"
                placeholder="Enter Your Name"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                variant="outlined"
                style={{ width: "70%", margin: "10px 0" }}
              />
              <Typography variant="subtitle1">CVC Number</Typography>
              <TextField
                type="text"
                name="cvc"
                placeholder="CVC Number"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                variant="outlined"
                style={{ width: "70%", margin: "10px 0" }}
              />
              <Typography variant="subtitle1">Expiry date</Typography>
              <TextField
                type="number"
                name="expiry"
                placeholder="Expiry date"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                variant="outlined"
                style={{ width: "70%", margin: "10px 0" }}
              />
              <Button
                variant="contained"
                size="small"
                color="primary"
                type="submit"
                style={{ width: "250px" }}
              >
                Add Card
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CreditCard;

// import React, { useState } from "react";
// import Cards from "react-credit-cards";
// import "react-credit-cards/es/styles-compiled.css";
// import TextField from "@material-ui/core/TextField";
// import { Container, Grid, Typography, Button } from "@material-ui/core";

// export default class CreditCard extends React.Component {
//   state = {
//     cvc: "",
//     expiry: "",
//     focus: "",
//     name: "",
//     number: "",
//   };

//   handleInputFocus = (e) => {
//     this.setState({ focus: e.target.name });
//   };

//   handleInputChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     fetch("https://safe-bastion-79755.herokuapp.com/card", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(this.state),
//     })
//       .then((res) => res.json())
//       .then((success) => {
//         if (success) {
//           alert("your card create successful");
//         }
//       });

//     this.setState({
//       cvc: "",
//       expiry: "",
//       focus: "",
//       name: "",
//       number: "",
//     });
//   };

//   render() {
//     return (
//       <Container>
//         <Grid
//           container
//           item
//           md={12}
//           id="PaymentForm"
//           style={{ padding: "30px 0" }}
//         >
//           <Grid item md={6} sm={12} xs={12}>
//             <Cards
//               cvc={this.state.cvc}
//               expiry={this.state.expiry}
//               focused={this.state.focus}
//               name={this.state.name}
//               number={this.state.number}
//             />
//           </Grid>
//           <Grid item md={6} sm={12} xs={12}>
//             <form onSubmit={this.handleSubmit}>
//               <Typography variant="subtitle1">Card Number</Typography>
//               <TextField
//                 variant="outlined"
//                 style={{ width: "70%", margin: "10px 0" }}
//                 type="tel"
//                 name="number"
//                 placeholder="Card Number"
//                 onChange={this.handleInputChange}
//                 onFocus={this.handleInputFocus}
//               />
//               <Typography variant="subtitle1">Enter Your Name</Typography>
//               <TextField
//                 type="text"
//                 name="name"
//                 placeholder="Enter Your Name"
//                 onChange={this.handleInputChange}
//                 onFocus={this.handleInputFocus}
//                 variant="outlined"
//                 style={{ width: "70%", margin: "10px 0" }}
//               />
//               <Typography variant="subtitle1">CVC Number</Typography>
//               <TextField
//                 type="text"
//                 name="cvc"
//                 placeholder="CVC Number"
//                 onChange={this.handleInputChange}
//                 onFocus={this.handleInputFocus}
//                 variant="outlined"
//                 style={{ width: "70%", margin: "10px 0" }}
//               />
//               <Typography variant="subtitle1">Expiry date</Typography>
//               <TextField
//                 type="number"
//                 name="expiry"
//                 placeholder="Expiry date"
//                 onChange={this.handleInputChange}
//                 onFocus={this.handleInputFocus}
//                 variant="outlined"
//                 style={{ width: "70%", margin: "10px 0" }}
//               />
//               <Button
//                 variant="contained"
//                 size="small"
//                 color="primary"
//                 type="submit"
//                 style={{ width: "250px" }}
//               >
//                 Add Card
//               </Button>
//             </form>
//           </Grid>
//         </Grid>
//       </Container>
//     );
//   }
// }
