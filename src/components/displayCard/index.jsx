import { useHistory } from "react-router-dom";
import { useState, useContext } from "react";

import { ActivitiesContext } from "../../providers/activities/activities";
import { Container, DisplayContainer } from "./styles";
import { GoalsContext } from "../../providers/goal/goal";
import { GroupContext } from "../../providers/groups/groups";
import Button from "../button";
import HabitEditInfo from "../popUps/habits/updateHabit";

const DisplayCard = ({ type = "", data, boolean = false }) => {
  const [actualId, setActualId] = useState(0);
  const [editHabits, setEditHabits] = useState(false);

  const { renderActivities, setActivities } = useContext(ActivitiesContext);
  const { renderGoals, setGoals } = useContext(GoalsContext);
  const { subscribeGroup, setGroupName } = useContext(GroupContext);

  const history = useHistory();

  const OpClEdit = (id) => {
    setEditHabits(!editHabits);
    setActualId(id);
  };

  const goPageGroups = (id, group) => {
    localStorage.setItem("@Habits:groupID", id);
    localStorage.setItem("@Habits:groupContent", JSON.stringify(group));

    setGroupName(group.name);
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
            <Container key={index} className="group-card">
              <h3>{group.name}</h3>
              <h4>{group.category}</h4>
              <p>{group.description}</p>
              <p>{group.creator.username}</p>
              <div className="group-card-button">
                {boolean ? (
                  <div>
                    <Button
                      onClick={() => subscribeGroup(group.id)}
                      name="button--pink"
                    >
                      Inscrever
                    </Button>
                  </div>
                ) : (
                  <div>
                    {" "}
                    <Button
                      onClick={() => goPageGroups(group.id, group)}
                      name="button--blue"
                    >
                      Ir para Pagina
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
              <p>
                Status:{" "}
                <span>{habit.achieved ? "Concluido" : "Em Progresso"}</span>
              </p>
              <p>
                Progresso: <span>{habit.how_much_achieved}/100</span>
              </p>
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
