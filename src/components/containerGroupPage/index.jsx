import { useState } from "react";
import api from "../../services/api";
import Button from "../button";
import NewGoal from "../popUps/goals/newGoal";

const ContainerGroup = ({ text }) => {
  const [newGoal, setNewGoal] = useState(false);
  const [newGroup, setNewGroup] = useState(false);

  const OpClHabit = () => {
    setNewGoal(!newGoal);
  };

  const OpClGroup = () => {
    setNewGroup(!newGroup);
  };

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
    </div>
  );
};

export default ContainerGroup;
