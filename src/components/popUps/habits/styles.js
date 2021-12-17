import styled from "styled-components";

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
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

export const searchHabitForm = styled.form`
  display: flex;
  flex-direction: row;
`;

export const ContainerSearchHabit = styled.div`
  form:second-of-type {
    flex-direction: colum;
  }

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
  .habitList {
    height: 170px;
    overflow-x: scroll;

    @media (min-width: 1024px) {
      height: 215px;
    }
  }

  .updateHabit {
    flex-direction: column;
    @media (min-width: 1024px) {
      height: 300px;
    }
  }
`;

export const UpdateHabitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const Content = styled.div`
  display: flex;
  font-size: 12px;
  height: 25px;

  button {
    margin-left: 15px;
  }
`;
