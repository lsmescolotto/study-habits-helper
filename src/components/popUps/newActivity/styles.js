import styled from "styled-components";

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 40px 40px 40px;
    text-align: start;

    @media (max-width: 768px) {
      padding: 0px 30px 30px 30px;
    }

    button {
      margin-top: 20px;
    }
  }
`;
