import { useState, useContext } from "react";
import { GroupContext } from "../../providers/groups/groups";
import { GoalsContext } from "../../providers/goal/goal";
import HabitEditInfo from "../popUps/habits/updateHabit";
import { Container } from "./styles";
import Button from "../button";
import { useHistory } from "react-router-dom";

const DisplayCard = ({ type = "", data, boolean = false }) => {
  const { subscribeGroup } = useContext(GroupContext);
  const { renderGoals } = useContext(GoalsContext);

  const history = useHistory();

  const [editHabits, setEditHabits] = useState(false);
  const [actualId, setActualId] = useState(0);

  const OpClEdit = (id) => {
    setEditHabits(!editHabits);
    setActualId(id);
  };

  const goPageGroups = (id) => {
    localStorage.setItem("GroupID", id);
    renderGoals();
    history.push(`/group/${id}`);
  };

  return (
    <>
      {type === "group"
        ? data.map((group, index) => (
            <Container key={index}>
              <h3>{group.name}</h3>
              <h4>{group.category}</h4>
              <p>{group.description}</p>
              <p>{group.creator.username}</p>
              <Button
                onClick={() => goPageGroups(group.id)}
                name="button--blue"
              >
                Ir para Pagina
              </Button>
              {boolean && (
                <div>
                  <Button
                    onClick={() => subscribeGroup(group.id)}
                    name="button--pink"
                  >
                    Inscrever
                  </Button>
                </div>
              )}
            </Container>
          ))
        : data.map((habit, index) => (
            <Container key={index} onClick={() => OpClEdit(habit.id)}>
              <h3>{habit.title}</h3>
              <h4>{habit.category}</h4>
              <p>{habit.achieved}</p>
              <p>{habit.how_much_achieved}</p>
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
