import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  justify-content: space-between;
  text-align: center;

  .cards-containers {
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    overflow-y: scroll;
    height: calc(100vh - 20vh);
    width: 98%;
  }

  @media (min-width: 1024px) {
    .cards-containers {
      align-items: center;
      flex-flow: row nowrap;
      justify-content: space-evenly;
    }

    .habits {
      width: 500px;
    }
  }
`;

export const HabitsContainer = styled.div`
  overflow: hidden scroll;
  width: 98%;
  height: 80%;
  @media (min-width: 1024px) {
    height: 85%;
  }
`;

export const GroupsContainer = styled.div`
  overflow: hidden scroll;
  width: 98%;
  height: 80%;

  @media (min-width: 1024px) {
    height: 85%;
  }
`;
