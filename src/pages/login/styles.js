import styled from "styled-components";
import loginImage from "../../assets/img/logInImg.gif";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;

  span {
    bottom: 0;
    position: absolute;
  }
`;

export const Background = styled.div`
  @media (min-width: 768px) {
    background-size: contain;
    background: url(${loginImage}) no-repeat center;
    flex: 1;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  display: flex;
  height: 70%;
  justify-content: space-between;
  margin-top: 40px;
  width: 100vw;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const Form = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;

  h2 {
    font-family: var(--title-font);
    font-size: 32px;
  }

  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    -webkit-box-shadow: 4px 5px 11px -5px #000000;
    border-radius: 5px;
    box-shadow: 4px 5px 11px -5px #000000;
    height: 70%;
    margin-top: 20px;
    padding: 30px;
    width: 350px;

    @media (max-width: 768px) {
      width: 300px;
    }
  }

  small {
    -webkit-box-shadow: 4px 5px 11px -5px #000000;
    align-items: center;
    border-radius: 5px;
    box-shadow: 4px 5px 11px -5px #000000;
    display: flex;
    font-family: var(--main-font);
    font-size: 13px;
    height: 13%;
    justify-content: center;
    margin-top: 10px;
    padding: 10px;
    width: 350px;

    a {
      color: var(--blue-50);
    }

    a:hover {
      color: var(--pink-50);
      text-shadow: 0 0 var(--black-50);
    }

    a:active {
      color: var(--pink-60);
      text-shadow: 0 0 var(--black-50);
    }

    @media (min-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 768px) {
      width: 300px;
    }
  }
`;
