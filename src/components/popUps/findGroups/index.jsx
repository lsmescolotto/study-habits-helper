import { useContext, useState } from "react";

import { GroupContext } from "../../../providers/groups/groups";
import PopUpBase from "../popUpBase";
import Input from "../../input";
import Button from "../../button";
import DisplayCard from "../../displayCard";

const FindGroups = () => {
  const { getGroups, groupList } = useContext(GroupContext);

  const [searchGroup, setSearchGroup] = useState("");

  const [searchResult, setSearchResult] = useState([]);

  if (searchGroup === "") {
    setSearchResult(groupList);
  } else {
    setSearchResult(
      groupList.filter(
        (group) =>
          group.name.includes(searchGroup) ||
          group.category.includes(searchGroup)
      )
    );
  }

  return (
    <PopUpBase title="Pesquisar grupos">
      <div>
        <Input
          label="Pesquisar grupos"
          register=""
          name=""
          value={searchGroup}
          onChange={(event) => setSearchGroup(event.target.value)}
        />
        <Button onClick={getGroups}>Pesquisar</Button>
        <span>Resultado para {searchGroup}</span>
      </div>
      <DisplayCard type="group" data={searchResult} />
    </PopUpBase>
  );
};

export default FindGroups;
