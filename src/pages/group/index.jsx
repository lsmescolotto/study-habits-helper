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
import { ActivitiesContext } from "../../providers/activities/activities.js";
import DisplayGroup from "../../components/displayGroups/index.jsx";

const Group = () => {
  const { goals, renderGoals } = useContext(GoalsContext);
  const { activities, renderActivities } = useContext(ActivitiesContext);

  useEffect(() => {
    renderGoals();
    renderActivities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          {activities.results && <DisplayGroup data={activities.results} />}
        </ActivitiesContainer>
        <MembersContainer>MEMBROS DO GRUPO</MembersContainer>
      </div>
      <Footer />
    </Container>
  );
};

export default Group;
