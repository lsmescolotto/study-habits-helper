import React from "react";
import PopUpBase from "../popUpBase";
import Input from "../../input";
import Button from "../../button";
import toast from "react-hot-toast";
import api from "../../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./styles";

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
      .then((response) => {
        console.log(response);
        toast.success("Atividade atualizada");
        reset();
        closePopUp();
      })
      .catch((err) => toast.error("Não foi possível, atividade inexistente."));
  };

  const deleteFunction = () => {
    api
      .delete(`/activities/${activityId}/`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((response) => {
        console.log(response);
        toast.success("Atividade deletada");
        closePopUp();
      })
      .catch((err) => toast.error("Não foi possível, grupo inexistente."));
  };

  return (
    <Container>
    <PopUpBase title="Nova Atividade" closePopUp={closePopUp}>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          label="Título"
          register={register}
          name="title"
          error={errors.title?.message}
        />
        <div className="buttons_box">
          <Button type="submit" name="button--blue button__pop-up">
            Atualizar
          </Button>
          <Button
            onClick={() => deleteFunction()}
            name="button--red button__pop-up"
          >
            Deletar
          </Button>
        </div>
      </form>
    </PopUpBase>
    </Container>
  );
};

export default UpdateActivity;
