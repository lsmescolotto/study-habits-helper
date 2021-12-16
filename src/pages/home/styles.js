import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: var(--main-font);
  height: 100vh;
  justify-content: space-between;
`;

export const Content = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 80vw;

  @media (min-width: 1024px) {
    align-items: center;
    justify-content: space-between;
  }
`;

export const RedirectContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: space-around;
  text-align: center;
  width: 60vw;

  header {
    h1 {
      font-size: 29px;
      font-weight: bold;
    }

    h2 {
      font-size: 26px;
    }
  }

  h3 {
    font-size: 24px;
  }

  h4 {
    font-size: 14px;
  }

  a {
    margin-left: 5px;
    color: var(--blue-50);
    font-weight: 500;
  }

  a:hover {
    color: var(--pink-50);
    text-shadow: 0 0 var(--black-50);
  }

  a:active {
    color: var(--pink-60);
    text-shadow: 0 0 var(--black-50);
  }

  @media screen and (min-width: 1024px) {
    width: 40vw;

    header {
      align-items: flex-start;
      display: flex;
      justify-content: center;

      h1 {
        font-size: 32px;
        margin-right: 7px;
      }

      h2 {
        font-size: 29px;
      }
    }

    h3 {
      font-size: 26px;
    }

    h4 {
      font-size: 18px;
    }
  }
`;

export const ImageContainer = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: inline-block;
    img {
      min-height: 345px;
      min-width: 429px;
      height: 30vh;
      width: 30vw;
    }
  }
`;
