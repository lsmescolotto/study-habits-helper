import { useEffect, useState, useContext } from "react";
import Button from "../button";
import NewGoal from "../popUps/goals/newGoal";
import NewActivity from "../popUps/newActivity";
import { GoalsContext } from "../../providers/goal/goal";
import { ActivitiesContext } from "../../providers/activities/activities";

const ContainerGroup = ({ text }) => {
  const [newGoal, setNewGoal] = useState(false);
  const [newActivity, setNewActivity] = useState(false);
  const [newGroup, setNewGroup] = useState(false);
  const { renderGoals } = useContext(GoalsContext);
  const { renderActivities } = useContext(ActivitiesContext);
  const groupId = localStorage.getItem("GroupID");

  const OpClHabit = () => {
    setNewGoal(!newGoal);
  };

  const OpClGroup = () => {
    setNewGroup(!newGroup);
  };

  useEffect(() => {
    renderGoals(groupId);
    renderActivities(groupId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <header>
        <h3>{text}</h3>
        {text === "Metas do Grupo" ? (
          <Button onClick={OpClHabit}>+</Button>
        ) : text === "Atividades do Grupo" ? (
          <Button onClick={OpClGroup}>+</Button>
        ) : (
          <div></div>
        )}
      </header>
      {newGoal === true && (
        <NewGoal newGoal={newGoal} setNewGoal={setNewGoal} />
      )}
      {newActivity === true && (
        <NewActivity
          newActivity={newActivity}
          setNewActivity={setNewActivity}
        />
      )}
    </div>
  );
};

export default ContainerGroup;
