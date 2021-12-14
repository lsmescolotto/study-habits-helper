import React from "react";
import {
  Container,
  GoalsContainer,
  ActivitiesContainer,
  MembersContainer,
} from "./styles.js";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ContainerGroup from "../../components/containerGroupPage";
import { useContext, useEffect } from "react";
import { GoalsContext } from "../../providers/goal/goal.js";
import DisplayGroup from "../../components/displayGroups/index.jsx";

const Group = () => {
  const { goals, renderGoals } = useContext(GoalsContext);

  useEffect(() => {
    renderGoals();
    renderActivities();
  }, []);

  return (
    <Container>
      <Header group />
      <div className="cards-containers">
        <GoalsContainer>
          <ContainerGroup text="Metas do Grupo" />
          {goals.results && <DisplayGroup type="goals" data={goals.results} />}
        </GoalsContainer>
        <ActivitiesContainer>
          <ContainerGroup text="Atividades do Grupo" />
        </ActivitiesContainer>
        <MembersContainer>
          <ContainerGroup text="Membros do Grupo" />
        </MembersContainer>
      </div>
      <Footer />
    </Container>
  );
};

export default Group;
