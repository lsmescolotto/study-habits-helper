import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import { useHistory, Link } from "react-router-dom";
import * as yup from "yup";

import api from "../../services/api";
import Button from "../../components/button";
import Input from "../../components/input";

const Login = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          label="Digite seu Email"
          placeholder="E-mail"
          register={register}
          name="email"
          error={errors.email?.message}
        />

        <Input
          label="Digite sua senha"
          type="password"
          placeholder="Senha"
          register={register}
          name="password"
          error={errors.password?.message}
        />

        <Button type="submit">Login</Button>
        <p>
          Não possui conta? <Link to="/signup">Cadastre-se</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
