import styled from "styled-components";
import homeImage from "../../assets/img/homeImg.gif";

export const RedirectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50vh;
  width: 60vw;
  text-align: center;

  h1 {
    font-size: 29px;
    font-weight: bold;
  }

  h2,
  h3 {
    font-size: 24px;
  }

  a {
    margin-left: 5px;
  }

  @media screen and (min-width: 1024px) {
    width: 40vw;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  font-family: var(--main-font);
`;

export const ImageContainer = styled.div`
  @media screen and (min-width: 1024px) {
    width: 40vw;
    height: 70vh;
    background: url(${homeImage}) no-repeat center;
  }
`;
