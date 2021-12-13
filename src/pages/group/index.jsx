import React from "react";
import {
  Container,
  GoalsContainer,
  ActivitiesContainer,
  MembersContainer,
} from "./styles.js";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Group = () => {
  return (
    <Container>
      <Header group />
      <div className="cards-containers">
        <GoalsContainer>METAS DO GRUPO</GoalsContainer>
        <ActivitiesContainer>ATIVIDADES DO GRUPO</ActivitiesContainer>
        <MembersContainer>MEMBROS DO GRUPO</MembersContainer>
      </div>
      <Footer />
    </Container>
  );
};

export default Group;
