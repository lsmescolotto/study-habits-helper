import styled from "styled-components";

export const Container = styled.div`
  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 280px;
    justify-content: flex-start;
    text-align: left;

    div {
      p {
        margin-top: 0;
        font-weight: bold;
      }
    }

    button {
      height: 50px;
      margin-top: 15px;
      width: 230px;
    }
  }

  @media (min-width: 768px) {
    form {
      height: 300px;

      button {
        height: 65px;
        margin-top: 25px;
      }
    }
  }
`;
