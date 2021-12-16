import styled from "styled-components";

export const Image = styled.img`
  display: none;

  @media only screen and (min-width: 900px) {
    display: inline-block;
  }
`;

export const Desktop = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`;

export const Content = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-style: var(--main-font);
  height: 80vh;
  justify-content: space-evenly;

  h2 {
    color: var(--black-100);
    font-family: var(--title-font);
    font-size: 28px;
  }

  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
  }

  input {
    width: 250px;
  }
`;

export const SignUpBox = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  height: fit-content;
  width: 300px;

  border-radius: 8px;
  box-shadow: 4px 5px 4px var(--grey-90);
`;

export const LoginRedirectBox = styled.div`
  border-radius: 8px;
  box-shadow: 4px 5px 4px var(--grey-90);
  display: flex;
  justify-content: space-around;
  padding: 20px 30px;
  text-align: center;
  width: 300px;

  span,
  a {
    font-family: var(--main-font);
    font-size: 13px;
  }

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

  @media only screen and (min-width: 900px) {
    font-size: 16px;
  }
`;
