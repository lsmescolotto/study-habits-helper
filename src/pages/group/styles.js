import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  justify-content: space-between;
  text-align: center;

  .cards-containers {
    display: flex;
    flex-flow: column nowrap;
    height: 100%;
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



export const GoalsContainer = styled.div`
  @media (min-width: 1024px) {
    width: 32%;
  }
`;

export const ActivitiesContainer = styled.div`
  @media (min-width: 1024px) {
    width: 32%;
  }
`;

export const MembersContainer = styled.div`
  @media (min-width: 1024px) {
    width: 30%;
  }
`;

