import { useContext, useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { GroupContext } from "../../../providers/groups/groups";
import Button from "../../button";
import DisplayCard from "../../displayCard";
import Input from "../../input";
import PopUpBase from "../popUpBase";

import { Container, Content, CardsContainer } from "./styles";

const FindGroups = ({ search, setSearch }) => {
  const [searchGroup, setSearchGroup] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const { getGroups, groupList, setGroupList } = useContext(GroupContext);

  const schema = yup.object().shape({
    search: yup.string(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

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

      <Container>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            error={errors.search?.message}
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
        <Content>
          <span>Resultado para: {searchGroup}</span>
          <Button onClick={() => cleanSearch()} name="button--clear">
            Limpar
          </Button>
        </Content>
      </Container>

      <CardsContainer>
        {searchResult.results && (
          <DisplayCard type="group" data={searchResult.results} boolean />
        )}
      </CardsContainer>
    </PopUpBase>
  );
};

export default FindGroups;
