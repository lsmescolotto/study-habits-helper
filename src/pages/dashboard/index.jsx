import { useEffect, useContext } from "react";

import { motion } from "framer-motion";

import { GroupContext } from "../../providers/groups/groups.js";
import { HabitsContext } from "../../providers/habits/habits.js";
import ContainerDashboard from "../../components/containerDashboard";
import DisplayCard from "../../components/displayCard/index.jsx";
import Footer from "../../components/footer";
import Header from "../../components/header";

import { Container, HabitsContainer, GroupsContainer } from "./styles.js";

const Dashboard = () => {
  const { habitsList, getHabitsAxios } = useContext(HabitsContext);
  const { subscriptions, getGroupsSubscriptions } = useContext(GroupContext);

  useEffect(() => {
    getHabitsAxios();
    getGroupsSubscriptions();
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
        <Header dashboard />
        <div className="cards-containers">
          <ContainerDashboard text="Habitos">
            <HabitsContainer>
              {habitsList[0] && <DisplayCard data={habitsList} />}
            </HabitsContainer>
          </ContainerDashboard>

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
    </motion.div>
  );
};

export default Dashboard;
