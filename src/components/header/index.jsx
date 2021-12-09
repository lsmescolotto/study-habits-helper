import { Container } from "./style";

const Header = ({ name = "", token = "" }) => {
  return (
    <Container>
      <figure>
        <img src="" alt="logo" />
      </figure>
      {!!token && (
        <div>
          {!!name && <h2>{name}</h2>}
          <div>icons</div>
        </div>
      )}
    </Container>
  );
};

export default Header;
