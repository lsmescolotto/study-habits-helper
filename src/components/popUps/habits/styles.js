import styled from "styled-components";

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const NewHabitForm = styled.form`
  text-align: start;
  text-transform: capitalize;
`;

export const UpdateHabitForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-around;
  text-align: start;
  text-transform: capitalize;
`;

export const ContainerSearchHabit = styled.div`
  form {
    align-items: baseline;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    text-align: start;

    div button {
      margin-left: 5px;
    }
  }
`;
