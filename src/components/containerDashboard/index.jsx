import { BiSearchAlt2, BiAddToQueue } from "react-icons/bi";

const ContainerDashboard = ({ text }) => {
  return (
    <div>
      <header>
        <h3>{text}</h3>
        <BiSearchAlt2 />
        <BiAddToQueue />
      </header>
    </div>
  );
};

export default ContainerDashboard;
