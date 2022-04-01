import { useEffect, useState, useContext } from "react";

import { ActivitiesContext } from "../../providers/activities/activities";
import { GoalsContext } from "../../providers/goal/goal";
import NewActivity from "../popUps/newActivity";
import NewGoal from "../popUps/goals/newGoal";

import { ContainerHeader } from "./styles";
import { FiPlusSquare } from "react-icons/fi";

const ContainerGroup = ({ text }) => {
  const [newActivity, setNewActivity] = useState(false);
  const [newGoal, setNewGoal] = useState(false);

  const { renderActivities } = useContext(ActivitiesContext);
  const { renderGoals } = useContext(GoalsContext);

  const groupId = localStorage.getItem("@Habits:groupID");

  const OpClHabit = () => {
    setNewGoal(!newGoal);
  };

  const OpClActivity = () => {
    setNewActivity(!newActivity);
  };

  useEffect(() => {
    renderGoals(groupId);
    renderActivities(groupId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ContainerHeader>
        <h3>{text}</h3>
        <div>
          {text === "Metas do Grupo" ? (
            <FiPlusSquare onClick={OpClHabit} className="addNew" />
          ) : text === "Atividades do Grupo" ? (
            <FiPlusSquare onClick={OpClActivity} className="addNew" />
          ) : (
            <div></div>
          )}
        </div>
      </ContainerHeader>
      
      {newGoal && <NewGoal newGoal={newGoal} setNewGoal={setNewGoal} />}
      {newActivity && (
        <NewActivity
          newActivity={newActivity}
          setNewActivity={setNewActivity}
        />
      )}
    </>
  );
};

export default ContainerGroup;
