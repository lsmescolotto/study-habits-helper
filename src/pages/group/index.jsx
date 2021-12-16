import React from "react";
import {
  Container,
  GoalsContainer,
  ActivitiesContainer,
  MembersContainer,
  Content,
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
  const { groupName } = useContext(GroupContext);
  const { goals, renderGoals } = useContext(GoalsContext);
  const { activities, renderActivities } = useContext(ActivitiesContext);

  const groupId = JSON.parse(localStorage.getItem("@Habits:groupID"));

  useEffect(() => {
    renderGoals(groupId);
    renderActivities(groupId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header group id={groupId} />
      <h2>{groupName}</h2>
      <div className="cards-containers">
        <GoalsContainer className="container__box">
          <ContainerGroup text="Metas do Grupo" />
          <Content>
            {goals.results && (
              <DisplayGroup type="goals" data={goals.results} />
            )}
          </Content>
        </GoalsContainer>
        <ActivitiesContainer className="container__box">
          <ContainerGroup text="Atividades do Grupo" />
          <Content>
            {activities.results && (
              <DisplayGroup type="activities" data={activities.results} />
            )}
          </Content>
        </ActivitiesContainer>

        <MembersContainer className="container__box">
          {localStorage.getItem("@Habits:groupContent") && (
            <>
              <ContainerGroup text="Membros do Grupo" />
              <Content>
                <DisplayGroup type="members" />
              </Content>
            </>
          )}
        </MembersContainer>
      </div>
      <Footer />
    </Container>
  );
};
export default Group;
