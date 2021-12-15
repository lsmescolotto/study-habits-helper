import { useState } from "react";
import { Container } from "./styles";
import UpdateGoals from "../popUps/goals/updateGoal";

const DisplayGroup = ({ type = "", data }) => {
  const [editGoals, setEditGoals] = useState(false);
  const [actualId, setActualId] = useState(0);

  const OpClEditGoals = (id) => {
    setEditGoals(!editGoals);
    setActualId(id);
  };

  return (
    <>
      {type === "goals"
        ? data.map((goals, index) => (
            <Container key={index} onClick={() => OpClEditGoals(goals.id)}>
              <h3>{goals.title}</h3>
              <h4>{goals.difficulty}</h4>
              <p>{goals.how_much_achieved}</p>
            </Container>
          ))
        : data.map((habit, index) => (
            <Container key={index}>
              <h3>{habit.title}</h3>
              <h4>{habit.category}</h4>
              <p>{habit.achieved}</p>
              <p>{habit.how_much_achieved}</p>
            </Container>
          ))}
      {editGoals === true && (
        <UpdateGoals
          editGoals={editGoals}
          setEditGoals={setEditGoals}
          id={actualId}
        />
      )}
    </>
  );
};
export default DisplayGroup;
