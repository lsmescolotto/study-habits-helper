import React from "react";
import PopUpBase from "../popUpBase";
import Input from "../../input";
import Button from "../../button";
import toast from "react-hot-toast";
import api from "../../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const UpdateActivity = ({ closePopUp, activityId }) => {

  const formSchema = yup.object().shape({
    title: yup.string().required("Título obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    api
      .patch(`/activities/${activityId}/`, data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((response) => console.log(response))
      .catch((err) => toast.error("Não foi possível, atividade inexistente."));

    reset();
    closePopUp();
  };

  const deleteFunction = () => {
    api
      .delete(`/activities/${activityId}/`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((response) => console.log(response))
      .catch((err) => toast.error("Não foi possível, grupo inexistente."));

    closePopUp();
  };

  return (
    <PopUpBase title="Nova Atividade" closePopUp={closePopUp}>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          label="Título:"
          {...register("title")}
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
