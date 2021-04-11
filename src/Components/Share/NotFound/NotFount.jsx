import { Container } from "@material-ui/core";
import React, { useEffect } from "react";
import "./NotFound.scss";

const NotFount = () => {
  useEffect(() => {
    window.onload = function () {
      document.querySelector(".cont_principal").className =
        "cont_principal cont_error_active";
    };
  }, []);
  return (
    <div>
      {/* <Container> */}
      <div class="cont_principal">
        <div class="cont_error">
          <h1>Oops 404!</h1>
          <p>The Page you're looking for isn't here.</p>
        </div>
        <div class="cont_aura_1"></div>
        <div class="cont_aura_2"></div>
      </div>
      {/* </Container> */}
    </div>
  );
};

export default NotFount;
