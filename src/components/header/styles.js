import styled from "styled-components";

export const Container = styled.header`
  align-items: center;
  box-shadow: 0 0 10px 0px var(--black-60);
  display: flex;
  height: 10vh;
  justify-content: space-between;
  width: 100vw;

  figure {
    margin-left: 20px;
    img {
      height: 40px;
    }
  }

  span {
    cursor: pointer;
    font-size: 32px;
    margin-right: 15px;
  }

  div {
    margin-right: 15px;
  }

  section {
    align-items: center;
    cursor: pointer;
    display: flex;
    margin-right: 20px;

    @media (max-width: 630px) {
      margin-right: 3px;
    }

    p {
      display: none;
    }

    @media (max-width: 630px) {
      span {
        display: none;
      }

      p {
        display: inline;
        font-size: 25px;
        margin-right: 8px;
      }
    }
  }
`;
