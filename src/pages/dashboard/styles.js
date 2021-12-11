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

export const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  height: 85px;
  justify-content: center;
  width: 100%;
`;

export const HabitsContainer = styled.div`
  @media (min-width: 1024px) {
    width: 37%;
  }
`;

export const GroupsContainer = styled.div`
  @media (min-width: 1024px) {
    width: 37%;
  }
`;

export const UserContainer = styled.div`
  @media (min-width: 1024px) {
    width: 20%;
  }
`;

export const FooterContainer = styled.div`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: center;
  width: 100%;
`;
