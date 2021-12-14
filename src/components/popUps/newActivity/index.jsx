import React from "react";
import PopUpBase from "../popUpBase";
import Input from "../../input";
import Button from "../../button";
import toast from "react-hot-toast";
import api from "../../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const NewActivity = ({ closePopUp }) => {
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

  const onSubmitFunction = ({ data, groupId }) => {
    let dateTime =
      data.realization_time.toISOString().replace(/\..+/, "") + "Z";

    api
      .post(
        "/activities/",
        { ...data, realization_time: dateTime, group: groupId },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        toast.success('Atividade adicionada')
        reset();
        closePopUp();
      })
      .catch((err) => toast.error("Não foi possível, grupo inexistente."));
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
