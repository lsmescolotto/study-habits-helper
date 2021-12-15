import styled from "styled-components";
import aboutUsImage from "../../assets/img/aboutUsImg.png";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: var(--main-font);
`;

export const Content = styled.div`
  width: 80vw;
  height: 55vh;
   
  @media (min-width: 1024px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 90vw;
`;

export const TextContainer = styled.div`
 display: flex;
    flex-direction: column;
    justify-content: space-between;
    line-height: 1.25;
    height: 55vh;

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
  }

  @media (min-width: 1024px) {
    width: 35vw;
    height: 40vh;

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
    background: url(${aboutUsImage}) no-repeat center;
    background-size: 543px 394px;
    width: 563px;
    height: 464px;
  }
`;
