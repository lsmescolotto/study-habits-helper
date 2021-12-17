import styled from "styled-components";
import aboutUsImage from "../../assets/img/aboutUsImg.png";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: var(--main-font);
  height: 100vh;
  justify-content: space-between;
  width: 100vw;
`;

export const Content = styled.div`
  height: 55vh;
  width: 80vw;

  @media (min-width: 1024px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 90vw;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 55vh;
  justify-content: space-between;
  line-height: 1.25;

  h2 {
    font-family: var(--title-font);
    font-size: 32px;
  }

  h4 {
    font-size: 18px;
  }

  p {
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    height: 40vh;
    width: 35vw;

    h2 {
      font-size: 36px;
    }

    h4 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const ImageContainer = styled.div`
  @media (min-width: 1024px) {
    background-size: 543px 394px;
    background: url(${aboutUsImage}) no-repeat center;
    height: 464px;
    width: 563px;
  }
`;
