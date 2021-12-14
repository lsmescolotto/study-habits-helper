import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  justify-content: space-between;
  text-align: center;

  .cards-containers {
    display: flex;
    flex-flow: column nowrap;
    min-height: 100vh;
    justify-content: space-around;
    width: 95%;
  }

  @media (min-width: 1024px) {
    .cards-containers {
      align-items: center;
      flex-flow: row nowrap;
      justify-content: space-between;
    }
  }
`;

export const HabitsContainer = styled.div`
  overflow-x: scroll;
  width: 98%;
  height: 240px;
  @media (min-width: 1024px) {
    width: 45%;
  }
`;

export const GroupsContainer = styled.div`
  overflow-x: scroll;
  width: 98%;
  height: 240px;
  @media (min-width: 1024px) {
    width: 45%;
  }
`;
