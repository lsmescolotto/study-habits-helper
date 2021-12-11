import React from "react";
import { Container, HabitsContainer, GroupsContainer } from "./styles.js";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Dashboard = () => {
  return (
    <Container>
      <Header dashboard />
      <div className="cards-containers">
        <HabitsContainer>HABITOS</HabitsContainer>
        <GroupsContainer>GROUPS</GroupsContainer>
      </div>
      <Footer />
    </Container>
  );
};

export default Dashboard;
