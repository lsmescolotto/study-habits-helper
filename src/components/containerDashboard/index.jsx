import { FiSearch, FiPlusSquare } from "react-icons/fi";
import { useState } from "react/cjs/react.development";
import NewHabit from "../popUps/habits/newHabit";
import GetHabitsSearch from "../popUps/habits/habitList";
import NewGroup from "../popUps/groups/newGroup";
import FindGroups from "../popUps/findGroups";
import { DashboardContainer, ContainerHeader } from "./styles";

const ContainerDashboard = ({ text, children }) => {
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
    <DashboardContainer>
      <ContainerHeader>
        <h3>{text}</h3>
        <div>
          {text === "Habitos" ? (
            <FiSearch onClick={OpClSearchHa} />
          ) : (
            <FiSearch onClick={OpClSearchGr} />
          )}

          {text === "Habitos" ? (
            <FiPlusSquare onClick={OpClHabit} className="addNew" />
          ) : (
            <FiPlusSquare onClick={OpClGroup} className="addNew" />
          )}
        </div>
      </ContainerHeader>

      {children}
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
    </DashboardContainer>
  );
};

export default ContainerDashboard;
