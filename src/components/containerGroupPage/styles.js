import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  width: 100%;

  h3 {
    font-family: var(--main-font);
    font-size: 18px;
    font-weight: 500;
    margin-left: 10px;
  }

  div {
    /* width: 75px; */
    display: flex;
    justify-content: space-around;
    align-items: center;
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

    div {
      /* width: 100px; */
      .addNew {
        background-color: var(--pink-50);
        font-size: 35px;
      }
    }
  }
`;
