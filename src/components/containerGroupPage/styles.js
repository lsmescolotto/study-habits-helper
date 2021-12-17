import styled from "styled-components";

export const ContainerHeader = styled.div`
  align-items: center;
  display: flex;
  height: 55px;
  justify-content: space-between;
  width: 100%;

  h3 {
    font-family: var(--main-font);
    font-size: 18px;
    font-weight: 500;
    margin-left: 10px;
  }

  div {
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin-right: 10px;

    svg {
      font-size: 25px;

      &:hover {
        cursor: pointer;
      }
    }

    .addNew {
      background-color: var(--blue-60);
      border-radius: 5px;
      color: var(--white);
      font-size: 30px;
    }
  }

  @media (min-width: 1024px) {
    height: 65px;

    h3 {
      font-size: 22px;
    }

    div .addNew {
      background-color: var(--pink-50);
      font-size: 35px;
    }
  }
`;
