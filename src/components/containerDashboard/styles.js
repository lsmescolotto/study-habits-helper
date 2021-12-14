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
`;

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  width: 100%;

  h3 {
    font-size: 22px;
    margin-left: 10px;
  }

  div {
    width: 75px;
    display: flex;
    justify-content: space-around;

    svg {
      font-size: 25px;
    }

    .addNew {
      background-color: var(--blue-60);
      border-radius: 5px;
    }
  }
`;
