import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  justify-content: space-between;
  text-align: center;

  h2 {
    font-family: var(--title-font);
    font-size: 25px;
    margin: 30px 0 15px 0;
  }

  .cards-containers {
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    height: calc(100vh - 189px);
    justify-content: flex-start;
    overflow-y: scroll;
    width: 95%;
  }

  .container__box {
    align-items: center;
    border-radius: 5px;
    box-shadow: 0px 4px 4px var(--black-60);
    color: var(--black-50);
    display: flex;
    flex-direction: column;
    font-family: var(--main-font);
    height: 290px;
    margin: 15px 0;
    min-width: 260px;
    padding: 5px;
    width: 50%;
  }

  @media (min-width: 1024px) {
    h2{
      font-size: 38px;
    }

    .container__box {
      height: 422px;
      margin: 0;
      max-width: 330px;
    }

    .cards-containers {
      align-items: center;
      flex-flow: row nowrap;
      height: calc(100vh - 209px);
      justify-content: space-around;
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

  @media (min-width: 768px) {
    height: 80%;
  }
`;
