import { IconContext } from "react-icons";
import { BiSearchAlt2 } from "react-icons/bi";
import Button from "../button";

const ContainerDashboard = ({ text }) => {
  return (
    <div>
      <header>
        <h3>{text}</h3>
        <IconContext.Provider>
          <BiSearchAlt2 />
          <Button>+</Button>
        </IconContext.Provider>
      </header>
    </div>
  );
};

export default ContainerDashboard;
