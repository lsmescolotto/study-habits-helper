import React from "react";
import {
  Container,
  HeaderContainer,
  HabitsContainer,
  GroupsContainer,
  UserContainer,
  FooterContainer,
} from "./styles.js";

const Dashboard = () => {
  return (
    <Container>
      <HeaderContainer>HEADER</HeaderContainer>

      <div className="cards-containers">
        <HabitsContainer>HABITOS</HabitsContainer>
        <GroupsContainer>GROUPS</GroupsContainer>
        <UserContainer>USER</UserContainer>
      </div>

      <FooterContainer>FOOTER</FooterContainer>
    </Container>
  );
};

export default Dashboard;
