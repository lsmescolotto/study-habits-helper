import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  min-height: 100vh;
  text-align: center;

  .cards-containers {
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    height: calc(100vh - 23vh);
    overflow-y: scroll;
    width: 98%;
  }

  @media (min-width: 1024px) {
    .cards-containers {
      align-items: center;
      flex-flow: row nowrap;
      justify-content: space-evenly;
    }
  }
`;

export const HabitsContainer = styled.div`
  height: 80%;
  overflow: hidden scroll;
  width: 98%;

  @media (min-width: 1024px) {
    height: 85%;
  }
`;

export const GroupsContainer = styled.div`
  height: 80%;
  overflow: hidden scroll;
  width: 98%;

  @media (min-width: 1024px) {
    height: 85%;
  }
`;
