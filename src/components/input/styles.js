import styled from "styled-components";

export const Container = styled.div`
  margin: 15px;

  p,
  input {
    color: var(--black-50);
  }

  p {
    font-size: 12px;
    font-weight: 500;
    margin: 8px 2px;
    width: 100%;
  }

  input {
    background-color: var(--grey-40);
    border-radius: 4px;
    border: 1px solid transparent;
    height: 32px;
    padding: 5px;
    width: 100%;
  }

  p,
  input,
  input::placeholder,
  span {
    font-family: var(--main-font);
  }

  input,
  input::placeholder {
    font-size: 12px;
  }

  input::placeholder {
    color: var(--grey-100);
  }

  input:focus {
    border: 1px solid var(--black-50);
  }

  input:placeholder-shown {
    font-family: var(--main-font);
  }

  input:-webkit-autofill {
    border: 1px solid transparent;
    box-shadow: 0 0 0px 1000px var(--grey-40) inset;
    font-family: var(--main-font);
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: var(--black-50);
    -webkit-box-shadow: 0 0 0px 1000px var(--grey-40) inset;
  }

  span {
    color: var(--red-20);
  }

  div {
    width: auto;
  }

  @media (min-width: 768px) {
    p {
      font-size: 13px;
    }

    input,
    input::placeholder {
      font-size: 14px;
    }
  }
`;
