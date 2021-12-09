import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;

  width: 100vw;
  height: 90vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  figure img {
    width: 50%;
    height: 100%;
  }
`;

export const InfoTeam = styled.div`
  width: 90%;
  height: 100%;
`;

export const Content = styled.div`
  margin: 15px;

  height: 10%;

  display: flex;
  justify-content: center;
  align-items: center;

  figure {
    width: 100px;
    height: 50px;
  }

  figure img {
    width: 50px;
    height: 50px;

    border-radius: 50%;
  }
`;

export const About = styled.div`
  width: fit-content;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;
