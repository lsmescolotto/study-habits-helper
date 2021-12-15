import styled from "styled-components";

export const DashboardContainer = styled.div`
  box-shadow: 0px 4px 4px var(--black-60);
  border-radius: 5px;
  width: 260px;
  height: 290px;
  font-family: var(--main-font);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
  color: var(--black-50);

  @media (min-width: 1024px) {
    height: 572px;
    margin: 0;
    min-width: 401px;
`;

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  width: 100%;

  h3 {
    font-size: 22px;
    font-weight: 500;
    margin-left: 10px;
  }

  div {
    width: 75px;
    display: flex;
    justify-content: space-around;
    align-items: center;

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
