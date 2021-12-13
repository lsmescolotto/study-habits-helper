import { useContext, useEffect, useState } from "react";

import { GroupContext } from "../../../providers/groups/groups";
import PopUpBase from "../popUpBase";
import Button from "../../button";
import DisplayCard from "../../displayCard";

const FindGroups = () => {
  const { getGroups, groupList } = useContext(GroupContext);

  useEffect(() => {
    getGroups();
  }, []);

  const [searchGroup, setSearchGroup] = useState("");

  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = () => {
    setSearchResult(
      groupList.results.filter((group) => {
        console.log(group.name.includes(searchGroup));
        return group.name.includes(searchGroup);
      })
    );
    console.log(searchGroup, searchResult);
  };

  return (
    <PopUpBase title="Pesquisar grupos">
      <div>
        <input
          placeholder="Pesquisar grupos"
          value={searchGroup}
          onChange={(event) => setSearchGroup(event.target.value)}
        />
        <Button onClick={() => handleSearch()}>Pesquisar</Button>
        <span>Resultado para {searchGroup}</span>
      </div>
      {searchResult.length !== 0 && (
        <DisplayCard type="group" data={searchResult}>
          <Button>Teste</Button>
        </DisplayCard>
      )}
    </PopUpBase>
  );
};

export default FindGroups;
