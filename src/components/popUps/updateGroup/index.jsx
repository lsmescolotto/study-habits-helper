import { useContext } from "react";
import { GroupContext } from "../../../providers/groups/groups";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import PopUpBase from "../popUpBase";
import Input from "../../input";
import Button from "../../button";

const UpdateGroup = ({ id, closePopUp }) => {
  const { updateGroup } = useContext(GroupContext);

  const schema = yup.object().shape({
    name: yup.string(),
  });

  const { handleSubmit, register } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    updateGroup(id, data);
  };

  return (
    <PopUpBase title="Editar grupo" closePopUp={closePopUp}>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input name="name" label="Nome" register={register} />
        <Button type="submit" name="button--blue button__pop-up">
          Atualizar
        </Button>
      </form>
    </PopUpBase>
  );
};

export default UpdateGroup;
