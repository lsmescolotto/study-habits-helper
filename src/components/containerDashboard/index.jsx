import { useState } from "react";

import FindGroups from "../popUps/findGroups";
import GetHabitsSearch from "../popUps/habits/habitList";
import NewGroup from "../popUps/groups/newGroup";
import NewHabit from "../popUps/habits/newHabit";

import { DashboardContainer, ContainerHeader } from "./styles";
import { FiSearch, FiPlusSquare } from "react-icons/fi";

const ContainerDashboard = ({ text, children }) => {
  const [newGroup, setNewGroup] = useState(false);
  const [newHabit, setNewHabit] = useState(false);
  const [searchGroup, setNewSearchGroup] = useState(false);
  const [searchHabit, setSearchHabit] = useState(false);

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
    <DashboardContainer className={text === "Habitos" ? "habits" : ""}>
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

      {newHabit && <NewHabit setNewHabit={setNewHabit} newHabit={newHabit} />}
      {searchHabit && (
        <GetHabitsSearch
          searchHabit={searchHabit}
          setSearchHabit={setSearchHabit}
        />
      )}
      {newGroup && (
        <NewGroup setNewGroup={setNewGroup} newGroupState={newGroup} />
      )}
      {searchGroup && (
        <FindGroups setSearch={setNewSearchGroup} search={searchGroup} />
      )}
    </DashboardContainer>
  );
};

export default ContainerDashboard;
