import { Container, ButtonStyle } from "./styles";

const Button = ({ onClick, children, name, ...rest }) => {
  return (
    <Container>
      <ButtonStyle onClick={onClick} className={name} {...rest}>
        {children}
      </ButtonStyle>
    </Container>
  );
};

export default Button;
