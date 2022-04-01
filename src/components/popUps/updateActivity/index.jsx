import { useContext } from "react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ActivitiesContext } from "../../../providers/activities/activities";

import PopUpBase from "../popUpBase";
import Input from "../../input";
import Button from "../../button";

import { Container } from "./styles";

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
    <Container>
      <PopUpBase title="Atualizar Atividade" closePopUp={closePopUp}>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            label="Título:"
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
