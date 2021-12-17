import { useContext, useEffect } from "react";

import { motion } from "framer-motion";

import { ActivitiesContext } from "../../providers/activities/activities.js";
import { GoalsContext } from "../../providers/goal/goal.js";
import { GroupContext } from "../../providers/groups/groups.js";
import ContainerGroup from "../../components/containerGroupPage";
import DisplayGroup from "../../components/displayGroups/index.jsx";
import Footer from "../../components/footer";
import Header from "../../components/header";

import {
  Container,
  GoalsContainer,
  ActivitiesContainer,
  MembersContainer,
  Content,
} from "./styles.js";

const Group = () => {
  const { activities, renderActivities } = useContext(ActivitiesContext);
  const { goals, renderGoals } = useContext(GoalsContext);
  const { groupName } = useContext(GroupContext);

  const groupId = JSON.parse(localStorage.getItem("@Habits:groupID"));

  useEffect(() => {
    renderGoals(groupId);
    renderActivities(groupId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
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
    </motion.div>
  );
};
export default Group;
