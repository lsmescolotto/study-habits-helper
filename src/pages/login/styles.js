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
  @media (min-width: 768px) {
    flex: 1;
    background: url(${loginImage}) no-repeat center;
    background-size: contain;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  height: 60%;
  width: 100vw;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
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

    @media (max-width: 768px) {
      width: 300px;
    }
  }

  small {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    width: 350px;
    height: 13%;
    border-radius: 5px;
    padding: 10px;
    -webkit-box-shadow: 4px 5px 11px -5px #000000;
    box-shadow: 4px 5px 11px -5px #000000;

    @media (max-width: 768px) {
      width: 300px;
    }
  }
`;
