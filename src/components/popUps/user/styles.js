import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 290px;

  section {
    align-items: center;
    border-radius: 5px;
    border: 1px solid var(--grey-90);
    display: flex;
    flex-direction: column;
    margin: 10px;
    min-width: 80%;
    padding: 15px;

    div {
      align-items: center;
      display: flex;

      h1 {
        font-size: 25px;
        font-weight: 500;
      }

      h3 {
        font-family: var(--main-font);
        font-size: 18px;
        font-weight: 500;
        margin-left: 15px;
      }

      p {
        font-family: var(--main-font);
        font-size: 18px;
        margin: 10px 0 0 5px;
      }
    }

    div button {
      margin-top: 10px;
      width: 220px;
    }
  }

  @media (min-width: 768px) {
    div button {
      width: 300px;
    }
  }

  @media (min-width: 1024px) {
    min-height: 310px;

    div button {
      width: 310px;
    }
  }
`;
