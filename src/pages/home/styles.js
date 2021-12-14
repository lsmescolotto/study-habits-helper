import styled from "styled-components";
import homeImage from "../../assets/img/homeImg.gif";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  font-family: var(--main-font);
`;

export const Content = styled.main`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    justify-content: space-around;
    align-items: center;
  }
`;

export const RedirectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50vh;
  width: 60vw;
  text-align: center;

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
  }

  @media screen and (min-width: 1024px) {
    width: 45vw;

    header {
      display: flex;
      justify-content: center;
      align-items: flex-start;

      h1 {
        margin-right: 7px;
        font-size: 32px;
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
  @media (min-width: 1024px) {
    width: 495px;
    height: 579px;
    background: url(${homeImage}) no-repeat center;
    background-size: 479px 372px;
  }
`;
