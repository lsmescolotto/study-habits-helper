import { useContext, useEffect, useState } from "react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { GroupContext } from "../../../providers/groups/groups";
import PopUpBase from "../popUpBase";
import Button from "../../button";
import Input from "../../input";
import DisplayCard from "../../displayCard";

const FindGroups = ({ search, setSearch }) => {
  const [searchGroup, setSearchGroup] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const { getGroups, groupList, setGroupList } = useContext(GroupContext);

  const schema = yup.object().shape({
    search: yup.string(),
  });

  const { handleSubmit, register } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    setSearchGroup(data.search);
    getGroups(data.search);
  };

  const cleanSearch = () => {
    setGroupList([]);
    setSearchGroup("");
    setSearchInput("");
  };

  const closeSearch = () => {
    setSearch(!search);
  };

  useEffect(() => {
    setSearchResult(groupList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onSubmitFunction]);

  return (
    <PopUpBase title="Pesquisar grupos" closePopUp={closeSearch}>
      <div>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            placeholder="Pesquisar grupos"
            register={register}
            name="search"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <Button type="submit" name="button--blue">
            Pesquisar
          </Button>
        </form>
        <span>Resultado para {searchGroup}</span>
        <Button onClick={() => cleanSearch()} name="button--clear">
          Limpar
        </Button>
      </div>

      {searchResult.results && (
        <DisplayCard type="group" data={searchResult.results} boolean />
      )}
    </PopUpBase>
  );
};

export default FindGroups;
