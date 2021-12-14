import { useState } from "react";
import HabitEditInfo from "../popUps/habits/updateHabit";
import { Container } from "./styles";

const DisplayCard = ({ type = "", data }) => {
  const [editHabits, setEditHabits] = useState(false);
  const [actualId, setActualId] = useState(0);

  const OpClEdit = (id) => {
    setEditHabits(!editHabits);
    setActualId(id);
  };

  return (
    <>
      {type === "group"
        ? data.map((atual, index) => (
            <Container key={index} onClick={(e) => console.log("click")}>
              <h3>{atual.name}</h3>
              <h4>{atual.category}</h4>
              <p>{atual.description}</p>
              <p>{atual.creator.username}</p>
            </Container>
          ))
        : data.map((atual, index) => (
            <Container key={index} onClick={() => OpClEdit(atual.id)}>
              <h3>{atual.title}</h3>
              <h4>{atual.category}</h4>
              <p>{atual.achieved}</p>
              <p>{atual.how_much_achieved}</p>
            </Container>
          ))}
      {editHabits === true && (
        <HabitEditInfo
          editHabits={editHabits}
          setEditHabits={setEditHabits}
          id={actualId}
        />
      )}
    </>
  );
};
export default DisplayCard;
