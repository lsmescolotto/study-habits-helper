import styled from "styled-components";

export const DisplayContainer = styled.div`
  .habits:nth-child(1n) {
    background-color: var(--blue-20);
  }

  .habits:nth-child(2n) {
    background-color: var(--blue-50);
  }

  .habits:nth-child(3n) {
    background-color: var(--yellow-50);
  }

  .habits:nth-child(4n) {
    background-color: var(--pink-50);
  }
`;

export const Container = styled.div`
  background-color: var(--grey-40);
  border-radius: 4px;
  border: 2px solid transparent;
  box-shadow: 0 0 4px 1px var(--grey-40);
  cursor: pointer;
  font-family: var(--main-font);
  font-size: 11px;
  height: auto;
  line-height: 18px;
  margin: 10px;
  padding: 8px;
  text-align: start;
  width: 90%;

  h3 {
    font-weight: 600;
    font-size: 12px;
  }

  h4 {
    font-weight: 500;
  }

  &:hover {
    box-shadow: 1px 1px 1px 0 var(--grey-60);
    transform: scale(1.02);
  }

  span {
    font-weight: 500;
  }

  .group-card-button {
    margin-block: 5px;
    margin: 0 auto;
    width: 90px;
  }

  .join-group-button {
    div {
      margin: 0 auto;
      width: 80px;
    }
  }

  @media (min-width: 1024px) {
    font-size: 12px;

    h3 {
      font-size: 14px;
    }

    h4 {
      font-size: 13px;
    }

    .group-card-button {
      width: 110px;
    }

    .join-group-button {
      div {
        width: 100px;
      }
    }
  }
`;
