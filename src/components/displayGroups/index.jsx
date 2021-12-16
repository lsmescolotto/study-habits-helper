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

  const groupContent = JSON.parse(localStorage.getItem("@Habits:groupContent"));
  setGroupName(groupContent.name);

  const formatDate = (dateTime) => {
    let current = new Date(dateTime.slice(0, -1));
    return current.toLocaleString();
  };

  return (
    <>
      {type === "goals"
        ? data.map((goals, index) => (
            <Container key={index} onClick={() => OpClEditGoals(goals.id)}>
              <h3>{goals.title}</h3>
              <h4>{goals.difficulty}</h4>
              <p>
                Status:{" "}
                {goals.achieved ? (
                  <span className="achievied">Concluído</span>
                ) : (
                  <span className="in-progress">Em Progresso</span>
                )}
              </p>
              <p>
                Progresso: <span>{goals.how_much_achieved}/100</span>
              </p>
            </Container>
          ))
        : type === "activities"
        ? data.map((activities, index) => (
            <Container
              className="activity"
              key={index}
              onClick={() => OpClEditActivities(activities.id)}
            >
              <h3>{activities.title}</h3>
              <h4>{formatDate(activities.realization_time)}</h4>
            </Container>
          ))
        : groupContent.users_on_group.map((user) => (
            <Container key={user.id}>
              <h3>{user.username}</h3>
              <h4>{user.email}</h4>
            </Container>
          ))}
      {editGoals && (
        <UpdateGoals
          editGoals={editGoals}
          setEditGoals={setEditGoals}
          id={actualId}
        />
      )}
      {editActivities && (
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
