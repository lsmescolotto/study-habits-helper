import React from "react";
import Button from "../../button";
import { Container, PopUpHeader, PopUpBody } from "./styles.js";

const PopUpBase = ({ title, children, closePopUp }) => {
  return (
    <Container>
      <PopUpHeader>
        <h3>{title}</h3>
        <Button
          onClick={closePopUp}
          children="X"
          className="closePopUP-button"
        />
      </PopUpHeader>
      <PopUpBody>{children}</PopUpBody>
    </Container>
  );
};

export default PopUpBase;
