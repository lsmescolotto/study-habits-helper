import { useContext } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { ActivitiesContext } from "../../../providers/activities/activities";
import Button from "../../button";
import Input from "../../input";
import PopUpBase from "../popUpBase";

import { Container } from "./styles";

const NewActivity = ({ newActivity, setNewActivity }) => {
  const { createActivities } = useContext(ActivitiesContext);

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
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    const groupId = localStorage.getItem("@Habits:groupID");

    let dateTime = new Date(data.realization_time);
    let convert =
      new Date(dateTime.getTime() - dateTime.getTimezoneOffset() * 60000)
        .toISOString()
        .replace(/\..+/, "") + "Z";

    const payload = { ...data, realization_time: convert, group: groupId };
    createActivities(payload);
    setNewActivity(!newActivity);
  };

  const closePopUp = () => {
    setNewActivity(!newActivity);
  };

  return (
    <Container>
      <PopUpBase title="Nova Atividade" closePopUp={closePopUp}>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            label="Título:"
            register={register}
            name="title"
            error={errors.title?.message}
          />
          <Input
            label="Será concluído(a) em:"
            type="datetime-local"
            register={register}
            name="realization_time"
            error={errors.realization_time?.message}
          />
          <Button type="submit" name="button--blue button__pop-up">
            Criar
          </Button>
        </form>
      </PopUpBase>
    </Container>
  );
};

export default NewActivity;
