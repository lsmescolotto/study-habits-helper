import { IconContext } from "react-icons";
import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react/cjs/react.development";
import Button from "../button";
import NewHabit from "../popUps/habits/newHabit";
import GetHabitsSearch from "../popUps/habits/habitList";

const ContainerDashboard = ({ text }) => {
  const [newHabit, setNewHabit] = useState(false);
  const [searchHabit, setSearchHabit] = useState(false);

  const OpClHabit = () => {
    setNewHabit(!newHabit);
  };

  const OpClSearch = () => {
    setSearchHabit(!searchHabit);
  };

  return (
    <div>
      <header>
        <h3>{text}</h3>
        {text === "Habitos" ? (
          <BiSearchAlt2 onClick={OpClSearch} />
        ) : (
          <BiSearchAlt2 />
        )}
        {text === "Habitos" ? (
          <Button onClick={OpClHabit}>+</Button>
        ) : (
          <Button>+</Button>
        )}
      </header>
      {newHabit === true && (
        <NewHabit setNewHabit={setNewHabit} newHabit={newHabit} />
      )}
      {searchHabit === true && (
        <GetHabitsSearch searchHabit={searchHabit} setSearchHabit={setSearchHabit} />
      )}
    </div>
  );
};

export default ContainerDashboard;
