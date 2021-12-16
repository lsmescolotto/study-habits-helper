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
import { GroupContext } from "../../providers/groups/groups.js";

const Group = () => {
  const { goals, renderGoals } = useContext(GoalsContext);
  const { activities, renderActivities } = useContext(ActivitiesContext);
  const { groupName } = useContext(GroupContext);

  const groupId = JSON.parse(localStorage.getItem("@Habits:groupID"));

  useEffect(() => {
    renderGoals(groupId);
    renderActivities(groupId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header group id={groupId} />
      <h1>{groupName}</h1>
      <div className="cards-containers">
        <GoalsContainer>
          <ContainerGroup text="Metas do Grupo" />
          {goals.results && <DisplayGroup type="goals" data={goals.results} />}
        </GoalsContainer>
        <ActivitiesContainer>
          <ContainerGroup text="Atividades do Grupo" />
          {activities.results && (
            <DisplayGroup type="activities" data={activities.results} />
          )}
        </ActivitiesContainer>
        <MembersContainer>
          {localStorage.getItem("@Habits:groupContent") && (
            <>
              <ContainerGroup text="Membros do Grupo" />
              <DisplayGroup type="members" />
            </>
          )}
        </MembersContainer>
      </div>
      <Footer />
    </Container>
  );
};
export default Group;
