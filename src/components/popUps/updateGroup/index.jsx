import { useContext } from "react";
import { GroupContext } from "../../../providers/groups/groups";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import PopUpBase from "../popUpBase";
import Input from "../../input";
import Button from "../../button";

const UpdateGroup = ({ id }) => {
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
    <PopUpBase title="Editar grupo">
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input name="name" label="Nome" register={register} />
        <Button type="submit">Atualizar</Button>
      </form>
    </PopUpBase>
  );
};

export default UpdateGroup;
