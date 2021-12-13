import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../input";
import PopUpBase from "../popUpBase";

const newGoal = ({ groupId }) => {
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatorio"),
    difficulty: yup.string().required("Campo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleGoal = (data) => {
    const fullData = {
      ...data,
      achieved: false,
      how_much_achieved: 0,
      group: groupId,
    };

    api
      .post(`/users/${JSON.parse(localStorage.getItem("userId"))}/`, fullData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((response) => {
        console.log(response);
        setUser(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <PopUpBase title={"Nova Meta"} closePopUp={closePopUp}>
      {" "}
      <form onSubmit={handleSubmit(handleGoal)}>
        <Input
          register={register}
          name={"title"}
          label={"titulo"}
          error={errors.title?.message}
        ></Input>

        <Input
          register={register}
          name={"difficulty"}
          label={"dificuldade"}
          error={errors.difficulty?.message}
        ></Input>

        <button type="submit">Criar</button>
      </form>
    </PopUpBase>
  );
};

export default newGoal;
