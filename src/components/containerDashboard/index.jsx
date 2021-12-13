import { IconContext } from "react-icons";
import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react/cjs/react.development";
import Button from "../button";
import NewHabit from "../popUps/habits/newHabit";

const ContainerDashboard = ({ text }) => {
  const [newHabit, setNewHabit] = useState(false);

  const OpCl = () => {
    setNewHabit(!newHabit);
  };

  return (
    <div>
      <header>
        <h3>{text}</h3>
        {text === "Habitos" ? <BiSearchAlt2 /> : <BiSearchAlt2 />}
        {text === "Habitos" ? (
          <Button onClick={OpCl}>+</Button>
        ) : (
          <Button>+</Button>
        )}
      </header>
      {newHabit === true && (
        <NewHabit setNewHabit={setNewHabit} newHabit={newHabit} />
      )}
    </div>
  );
};

export default ContainerDashboard;
