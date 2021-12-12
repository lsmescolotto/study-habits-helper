import React, { useContext } from "react";
import PopUpBase from "../popUpBase";
import Input from "../../input";
import Button from "../../button";
import toast from "react-hot-toast";
import api from "../../../services/api";
import UserContext from "../../../providers/user/user";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const NewActivity = ({ closePopUp, groupId }) => {
  const { token } = useContext(UserContext);

  let now = new Date();

  const formSchema = yup.object().shape({
    title: yup.string().required("Título obrigatório"),
    realization_time: yup
      .date()
      .required("Campo obrigatório")
      .nullable()
      .typeError("Data e hora obrigatórios")
      .min(now, "Não pode ser no passado"),
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
    let dateTime =
      data.realization_time.toISOString().replace(/\..+/, "") + "Z";

    api
      .patch(
        `/users/${groupId}/`,
        { ...data, realization_time: dateTime },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => console.log(response))
      .catch((err) => toast.error("Não foi possível, grupo inexistente."));

    reset();
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
        <Input
          label="Será concluída em:"
          type="datetime-local"
          {...register("realization_time")}
          name="realization_time"
          error={errors.realization_time?.message}
        />
        <Button type="submit">Criar</Button>
      </form>
    </PopUpBase>
  );
};

export default NewActivity;
