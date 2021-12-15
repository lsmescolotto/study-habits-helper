import { useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { GroupContext } from "../../providers/groups/groups";
import { GoalsContext } from "../../providers/goal/goal";
import { Container, DisplayContainer } from "./styles";
import HabitEditInfo from "../popUps/habits/updateHabit";
import Button from "../button";
import { useHistory } from "react-router-dom";
import { ActivitiesContext } from "../../providers/activities/activities";

const DisplayCard = ({ type = "", data, boolean = false }) => {
  const { subscribeGroup } = useContext(GroupContext);
  const { renderGoals, setGoals } = useContext(GoalsContext);
  const { renderActivities, setActivities } = useContext(ActivitiesContext);
  const history = useHistory();

  const [editHabits, setEditHabits] = useState(false);
  const [actualId, setActualId] = useState(0);

  const OpClEdit = (id) => {
    setEditHabits(!editHabits);
    setActualId(id);
  };

  const goPageGroups = (id, group) => {
    localStorage.setItem("GroupID", id);
    localStorage.setItem("groupContent", JSON.stringify(group));
    setGoals([]);
    setActivities([]);
    renderActivities(id);
    renderGoals(id);
    history.push(`/group/${id}`);
  };

  return (
    <DisplayContainer>
      {type === "group"
        ? data.map((group, index) => (
            <Container key={index}>
              <h3>{group.name}</h3>
              <h4>{group.category}</h4>
              <p>{group.description}</p>
              <p>{group.creator.username}</p>

              <div className="buttons">
                 <Button onClick={() => goPageGroups(group.id, group)} name="button--blue">
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
              </div>

            </Container>
          ))
        : data.map((habit, index) => (
            <Container
              key={index}
              onClick={() => OpClEdit(habit.id)}
              className="habits"
            >
              <h3>{habit.title}</h3>
              <h4>{habit.category}</h4>
              <p>{habit.frequency}</p>
              <p>{habit.difficulty}</p>
              <p>Status: {habit.achieved ? "Concluido" : "Em Progresso"}</p>
              <p>Progresso: {habit.how_much_achieved}/100</p>
            </Container>
          ))}
      {editHabits === true && (
        <HabitEditInfo
          editHabits={editHabits}
          setEditHabits={setEditHabits}
          id={actualId}
        />
      )}
    </DisplayContainer>
  );
};
export default DisplayCard;
