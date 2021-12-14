import React, { useEffect } from "react";
import { useContext } from "react";
import { Container, HabitsContainer, GroupsContainer } from "./styles.js";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ContainerDashboard from "../../components/containerDashboard";
import DisplayCard from "../../components/displayCard/index.jsx";
import { HabitsContext } from "../../providers/habits/habits.js";
import { GroupContext } from "../../providers/groups/groups.js";

const Dashboard = () => {
  const { habitsList, getHabitsAxios } = useContext(HabitsContext);
  const { subscriptions, getGroupsSubscriptions } = useContext(GroupContext);

  useEffect(() => {
    getHabitsAxios();
    getGroupsSubscriptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header dashboard />
      <div className="cards-containers">
        <HabitsContainer>
          <ContainerDashboard text="Habitos">
            {habitsList[0] && <DisplayCard data={habitsList} />}
          </ContainerDashboard>
        </HabitsContainer>

        <ContainerDashboard text="Grupos">
          <GroupsContainer>
            {subscriptions[0] && (
              <DisplayCard type="group" data={subscriptions} />
            )}
          </GroupsContainer>
        </ContainerDashboard>
      </div>
      <Footer />
    </Container>
  );
};

export default Dashboard;
