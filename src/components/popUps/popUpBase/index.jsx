import React from "react";
import Button from "../../button";
import { Container, PopUpContainer, PopUpHeader, PopUpBody } from "./styles.js";

const PopUpBase = ({ title, children, closePopUp }) => {
  return (
    <Container>
      <PopUpContainer>
        <PopUpHeader>
          <h3>{title}</h3>
          <Button
            onClick={closePopUp}
            children="X"
            name="button__close-pop-up"
          />
        </PopUpHeader>
        <PopUpBody>{children}</PopUpBody>
      </PopUpContainer>
    </Container>
  );
};

export default PopUpBase;
