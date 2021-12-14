import styled from "styled-components";

export const TeamContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
  justify-content: space-between;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 90vh;
  justify-content: flex-start;
  justify-content: space-around;
  margin-top: 20px;
  width: 100vw;

  .team_gif {
    display: none;
  }

  @media (min-width: 1024px) {
    .team_gif {
      display: flex;
      max-width: 615px;
      width: 45vw;
    }
  }
`;

export const InfoTeam = styled.div`
  max-width: 470px;
  width: 90%;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 15px;

  figure {
    height: 50px;
    width: 100px;
  }

  figure img {
    border-radius: 50%;
    height: 50px;
    width: 50px;
  }
`;

export const About = styled.div`
  align-items: flex-start;
  color: var(--black-50);
  display: flex;
  flex-direction: column;
  font-family: var(--main-font);
  font-size: 14px;
  justify-content: center;
  line-height: 1.25rem;
  width: 200px;

  a {
    cursor: pointer;
    height: 20px;
    width: 20px;
  }

  svg {
    color: #0a66c2;
    font-size: 20px;
  }

  svg:hover {
    color: var(--blue-50);
  }

  svg:active {
    color: var(--blue-60);
  }

  h4 {
    margin-right: 10px;
  }

  strong {
    font-weight: 500;
  }

  @media (min-width: 500px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 320px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
    margin: 20px 15px;
    width: 350px;

    a {
      height: 25px;
      width: 25px;
    }

    svg {
      font-size: 25px;
    }
  }
`;
