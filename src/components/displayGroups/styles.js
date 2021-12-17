import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--grey-40);
  border-radius: 4px;
  border: 2px solid transparent;
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
    font-size: 12px;
    font-weight: 600;
  }

  h4 {
    font-weight: 500;
  }

  &:hover {
    box-shadow: 1px 1px 1px 0 var(--grey-60);
    transform: scale(1.02);
  }

  .buttons {
    display: flex;
    flex-direction: row nowrap;
    justify-content: space-evenly;
    margin-top: 8px;
  }

  .achievied {
    color: green;
  }

  .in-progress {
    color: var(--red-20);
  }

  span {
    font-weight: 500;
  }

  @media (min-width: 1024px) {
    font-size: 12px;

    h3 {
      font-size: 14px;
    }

    h4 {
      font-size: 13px;
    }
  }
`;
