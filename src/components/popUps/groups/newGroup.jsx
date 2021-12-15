import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { GroupContext } from "../../../providers/groups/groups";
import Input from "../../input";
import PopUpBase from "../popUpBase";
import Button from "../../button";

const NewGroup = ({ setNewGroup, newGroupState }) => {
  const { createGroup } = useContext(GroupContext);

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const newGroup = (newGroupData) => {
    createGroup(newGroupData);
    setNewGroup(!newGroupState);
  };

  const handlePopUp = () => {
    setNewGroup(!newGroupState);
  };

  return (
    <PopUpBase title={"Novo grupo"} closePopUp={handlePopUp}>
      <form onSubmit={handleSubmit(newGroup)}>
        <Input
          register={register}
          name={"name"}
          label={"Nome"}
          error={errors.name?.message}
        />

        <Input
          register={register}
          name={"description"}
          label={"Descrição"}
          error={errors.description?.message}
        />

        <Input
          register={register}
          name={"category"}
          label={"Categoria"}
          error={errors.category?.message}
        />

        <Button type="submit" name="button--blue button__pop-up">
          Criar novo grupo
        </Button>
      </form>
    </PopUpBase>
  );
};

export default NewGroup;
