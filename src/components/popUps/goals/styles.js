import styled from "styled-components";

export const ContainerNewGoal = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: start;
    padding: 0px 40px 40px 40px;

    @media (max-width: 768px) {
      padding: 0px 30px 30px 30px;
    }

    button {
      margin-top: 20px;
    }
  }
`;

export const ContainerUpdateGoal = styled.div`
  form {
    display: flex;
    flex-direction: column;
    height: 200px;
    justify-content: space-around;
    text-align: start;
  }

  .buttons_box {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;
