import { Container } from "./styles";

const Input = ({ register, name, label, error = "", ...rest }) => {
  return (
    <Container>
      <div>
        <p>
          {label}: {!!error && <span>{error}</span>}
        </p>
      </div>
      <div>
        <input {...register(name)} {...rest} />
      </div>
    </Container>
  );
};

export default Input;
