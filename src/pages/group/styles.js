import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  justify-content: space-between;
  text-align: center;

  header {
    div {
      display: none;
    }
  }

  h2 {
    font-size: 30px;
    font-family: var(--title-font);
    margin-top: 30px;
  }

  .cards-containers {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    width: 95%;
    align-items: center;
  }

  .container__box {
    align-items: center;
    border-radius: 5px;
    box-shadow: 0px 4px 4px var(--black-60);
    color: var(--black-50);
    display: flex;
    flex-direction: column;
    font-family: var(--main-font);
    height: 100px;
    margin: 15px 0;
    min-width: 260px;
    padding: 5px;
    width: 50%;
  }

  @media (min-width: 1024px) {
    .container__box {
      height: 572px;
      margin: 0;
      max-width: 330px;
    }

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

export const Content = styled.div`
  height: 75%;
  overflow: hidden scroll;
  width: 98%;
`;
