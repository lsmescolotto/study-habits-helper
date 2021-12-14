import { useState } from "react";
import Button from "../button";
import NewGoal from "../popUps/goals/newGoal";
import NewActivity from "../popUps/newActivity";

const ContainerGroup = ({ text }) => {
  const [newGoal, setNewGoal] = useState(false);
  const [newActivity, setNewActivity] = useState(false);

  const OpClHabit = () => {
    setNewGoal(!newGoal);
  };

  const OpClGroup = () => {
    setNewActivity(!newActivity);
  };

  return (
    <div>
      <header>
        <h3>{text}</h3>
        {text === "Metas do Grupo" ? (
          <Button onClick={OpClHabit}>+</Button>
        ) : (
          <Button onClick={OpClGroup}>+</Button>
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
