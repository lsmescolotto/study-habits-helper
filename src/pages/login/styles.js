import styled from "styled-components";
import loginImage from "../../assets/img/logInImg.gif";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  span {
    position: absolute;
    bottom: 0;
  }
`;

export const Background = styled.div`
  @media (min-width: 1024px) {
    flex: 1;
    background: url(${loginImage}) no-repeat center;
    background-size: contain;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60%;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;

  h2 {
    font-size: 32px;
    font-family: var(--title-font);
  }

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    border-radius: 5px;
    margin-top: 20px;
    width: 350px;
    height: 70%;
    padding: 30px;
    -webkit-box-shadow: 4px 5px 11px -5px #000000;
    box-shadow: 4px 5px 11px -5px #000000;
  }
`;
