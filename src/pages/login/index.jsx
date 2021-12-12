import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useContext } from "react";

import Button from "../../components/button";
import Input from "../../components/input";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { UserContext } from "../../providers/user/user";

const Login = () => {
  const { userLogin } = useContext(UserContext);

  const schema = yup.object().shape({
    username: yup.string().required("Campo Obrigatório"),
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
    userLogin(data);
  };

  return (
    <div>
      <Header />
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          label="Digite seu Username"
          placeholder="Username"
          register={register}
          name="username"
          error={errors.username?.message}
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
      <Footer />
    </div>
  );
};

export default Login;
