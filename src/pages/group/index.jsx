import React from "react";
import {
  Container,
  HeaderContainer,
  GoalsContainer,
  ActivitiesContainer,
  MembersContainer,
  FooterContainer,
} from "./styles.js";

const Group = () => {
  return (
    <Container>
      <HeaderContainer>HEADER</HeaderContainer>

      <div className="cards-containers">
        <GoalsContainer>METAS DO GRUPO</GoalsContainer>
        <ActivitiesContainer>ATIVIDADES DO GRUPO</ActivitiesContainer>
        <MembersContainer>MEMBROS DO GRUPO</MembersContainer>
      </div>

      <FooterContainer>FOOTER</FooterContainer>
    </Container>
  );
};

export default Group;