import { useState } from "react";
import { Container } from "./styles";
import UpdateGoals from "../popUps/goals/updateGoal";
import UpdateActivity from "../popUps/updateActivity";
import { useContext } from "react/cjs/react.development";
import { GroupContext } from "../../providers/groups/groups";

const DisplayGroup = ({ type = "", data }) => {
  const { setGroupName } = useContext(GroupContext);
  
  const [editGoals, setEditGoals] = useState(false);
  const [editActivities, setEditActivities] = useState(false);
  const [actualId, setActualId] = useState(0);

  const OpClEditGoals = (id) => {
    setEditGoals(!editGoals);
    setActualId(id);
  };

  const OpClEditActivities = (id) => {
    setEditActivities(!editActivities);
    setActualId(id);
  };

  const groupContent = JSON.parse(localStorage.getItem("groupContent"));
  setGroupName(groupContent.name);

  return (
    <>
      {type === "goals"
        ? data.map((goals, index) => (
            <Container key={index} onClick={() => OpClEditGoals(goals.id)}>
              <h3>{goals.title}</h3>
              <h4>{goals.difficulty}</h4>
              <p>Status: {goals.achieved ? "Concluido" : "Em Progresso"}</p>
              <p>Progresso: {goals.how_much_achieved}/100</p>
            </Container>
          ))
        : type === "activities"
        ? data.map((activities, index) => (
            <Container
              key={index}
              onClick={() => OpClEditActivities(activities.id)}
            >
              <h3>{activities.title}</h3>
              <h4>{activities.realization_time}</h4>
            </Container>
          ))
        : groupContent.users_on_group.map((user) => (
            <Container key={user.id}>
              <h3>{user.username}</h3>
              <h4>{user.email}</h4>
            </Container>
          ))}
      {editGoals === true && (
        <UpdateGoals
          editGoals={editGoals}
          setEditGoals={setEditGoals}
          id={actualId}
        />
      )}
      {editActivities === true && (
        <UpdateActivity
          editActivities={editActivities}
          setEditActivities={setEditActivities}
          id={actualId}
        />
      )}
    </>
  );
};
export default DisplayGroup;
