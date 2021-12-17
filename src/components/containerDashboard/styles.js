import styled from "styled-components";

export const DashboardContainer = styled.div`
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 4px 4px var(--black-60);
  color: var(--black-50);
  display: flex;
  flex-direction: column;
  font-family: var(--main-font);
  height: 290px;
  margin: 15px 0;
  max-width: 350px;
  width: 80%;

  @media (min-width: 1024px) {
    height: 472px;
    margin: 0;
    min-width: 401px;
  }
`;

export const ContainerHeader = styled.div`
  align-items: center;
  display: flex;
  height: 55px;
  justify-content: space-between;
  width: 100%;

  h3 {
    font-size: 22px;
    font-weight: 500;
    margin-left: 10px;
  }

  div {
    align-items: center;
    display: flex;
    justify-content: space-around;
    width: 75px;

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

    div {
      width: 100px;
      .addNew {
        background-color: var(--pink-50);
        font-size: 35px;
      }
    }
  }
`;
