import styled from "styled-components";

export const Container = styled.div`
  .button--blue {
    background-color: var(--blue-60);
  }

  .button--blue:active {
    background-color: var(--blue-50);
  }

  .button--clear {
    background-color: var(--grey-90);
    font-size: 11px;
    height: 18px;
    letter-spacing: 0px;
    max-width: 50px;
    padding: 0;
  }

  .button__close-pop-up {
    background-color: transparent;
    border: 2px solid transparent;
    color: var(--grey-90);
  }

  .button__close-pop-up:hover {
    border: 2px solid transparent;
    color: var(--grey-100);
  }

  .button__close-pop-up:active {
    color: var(--black-50);
  }

  .button--pink {
    background-color: var(--pink-50);
  }

  .button--pink:active {
    background-color: var(--pink-60);
  }

  .button__pop-up,
  .button__header {
    border-radius: 8px;
    min-height: 40px;
    min-width: 100px;
  }

  .button--red {
    background-color: var(--red-20);
  }

  .button--red:active {
    background-color: var(--red-50);
  }

  @media (min-width: 1024px) {
    .button__pop-up {
      min-height: 55px;
      min-width: 150px;
    }
  }
`;

export const ButtonStyle = styled.button`
  border-radius: 6px;
  border: 2px solid transparent;
  color: var(--white);
  font-family: var(--main-font);
  font-size: 12px;
  font-weight: 500;
  height: 32px;
  padding: 5px;
  width: 100%;

  &:hover {
    border: 2px solid var(--black-50);
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
