import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react/cjs/react.development";
import Button from "../button";
import NewHabit from "../popUps/habits/newHabit";
import GetHabitsSearch from "../popUps/habits/habitList";
import NewGroup from "../popUps/groups/newGroup";
import FindGroups from "../popUps/findGroups";

const ContainerDashboard = ({ text }) => {
  const [newHabit, setNewHabit] = useState(false);
  const [searchHabit, setSearchHabit] = useState(false);
  const [newGroup, setNewGroup] = useState(false);
  const [searchGroup, setNewSearchGroup] = useState(false);

  const OpClHabit = () => {
    setNewHabit(!newHabit);
  };

  const OpClSearchHa = () => {
    setSearchHabit(!searchHabit);
  };

  const OpClGroup = () => {
    setNewGroup(!newGroup);
  };

  const OpClSearchGr = () => {
    setNewSearchGroup(!searchGroup);
  };

  return (
    <div>
      <header>
        <h3>{text}</h3>
        {text === "Habitos" ? (
          <BiSearchAlt2 onClick={OpClSearchHa} />
        ) : (
          <BiSearchAlt2 onClick={OpClSearchGr} />
        )}
        {text === "Habitos" ? (
          <Button onClick={OpClHabit}>+</Button>
        ) : (
          <Button onClick={OpClGroup}>+</Button>
        )}
      </header>
      {newHabit === true && (
        <NewHabit setNewHabit={setNewHabit} newHabit={newHabit} />
      )}
      {searchHabit === true && (
        <GetHabitsSearch
          searchHabit={searchHabit}
          setSearchHabit={setSearchHabit}
        />
      )}
      {newGroup === true && (
        <NewGroup setNewGroup={setNewGroup} newGroupState={newGroup} />
      )}
      {searchGroup === true && (
        <FindGroups setSearch={setNewSearchGroup} search={searchGroup} />
      )}
    </div>
  );
};

export default ContainerDashboard;
