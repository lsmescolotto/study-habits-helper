import React from "react";
import PopUpBase from "../popUpBase";
import Input from "../../input";
import Button from "../../button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ActivitiesContext } from "../../../providers/activities/activities";

const UpdateActivity = ({ id, editActivities, setEditActivities }) => {
  const { updateActivities, deleteActivities } = useContext(ActivitiesContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("Título obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    updateActivities(id, data);
    setEditActivities(!editActivities);
  };

  const deleteFunction = () => {
    deleteActivities(id);
    setEditActivities(!editActivities);
  };

  const closePopUp = () => {
    setEditActivities(!editActivities);
  };

  return (
    <PopUpBase title="Nova Atividade" closePopUp={closePopUp}>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          label="Título:"
          register={register}
          name="title"
          error={errors.title?.message}
        />
        <div className="buttons_box">
          <Button type="submit">Atualizar</Button>
          <Button onClick={() => deleteFunction()}>Deletar</Button>
        </div>
      </form>
    </PopUpBase>
  );
};

export default UpdateActivity;
