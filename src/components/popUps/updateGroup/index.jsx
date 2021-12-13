import { useContext } from "react";
import { GroupContext } from "../../../providers/groups/groups";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import PopUpBase from "../popUpBase";
import Input from "../../input";
import Button from "../../button";

const UpdateGroup = ({ id }) => {
  //remover depois a parte do localstorage
  localStorage.setItem(
    "token",
    JSON.stringify(
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5Nzk5MTY1LCJqdGkiOiI2YjU3MDdjYzdmOWM0MWE2YTZlOGJmZTRlMDE0NzNiZCIsInVzZXJfaWQiOjM0fQ.FxD2P3I24L6thOZiqxwelTnSj96IUfAco6FvJHryhbI"
    )
  );

  const { updateGroup } = useContext(GroupContext);

  const schema = yup.object().shape({
    name: yup.string(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    updateGroup(id, data);
  };

  return (
    <PopUpBase>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input name="name" label="Nome" register={register} />
        <Button type="submit">Atualizar</Button>
      </form>
    </PopUpBase>
  );
};

export default UpdateGroup;
