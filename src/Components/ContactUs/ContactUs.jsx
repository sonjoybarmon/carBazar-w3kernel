import { Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Footer from "../Share/Footer/Footer";
import NavMenu from "../Share/NavMenu/NavMenu";
// import emailjs from "emailjs-com";
import emailjs from "emailjs-com";
import "./ContactUs.scss";
import Alerts from "../../Hoc/Alert";

const ContactUs = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("sree", "sree", e.target, "user_6HjFfLEZ06IBPaOYJofh9")
      .then(
        (response) => {
          if (response) {
            alert(
              "We are receive your email ! Please wait some times we connect you."
            );
            // <Alerts />;
          }
          console.log(response, "ok");
        },
        (error) => {
          console.log(error.text, error);
        }
      );
    e.target.reset();
  }

  return (
    <div style={{ height: "70vh" }}>
      <NavMenu />
      <div style={{ height: "100%" }}>
        <form id="contact-form" className="contactForm" onSubmit={sendEmail}>
          <div className="contactTitle">
            <Typography variant="h6">Contact Us</Typography>
          </div>

          <div style={{ padding: "5px 15px" }}>
            <input
              className="ContactInput"
              placeholder="Name"
              type="text"
              name="name"
              required
            />
            <input
              className="ContactInput"
              placeholder="Email address"
              type="email"
              name="email"
              // onblur="this.setAttribute('value', this.value);"
              required
            />
            <span className="validation-text">
              Please enter a valid email address.
            </span>
            <div className="flex">
              <textarea
                placeholder="Message"
                name="message"
                rows="2"
                required
              />
            </div>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "15px" }}
              className="contactButton"
              type="submit"
            >
              Send
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
