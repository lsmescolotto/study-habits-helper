import styled from "styled-components";

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const NewHabitForm = styled.form`
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
  align-content: flex-end;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  margin: 0 auto;
  text-align: center;
  width: 350px;

  form:second-of-type {
    flex-direction: colum;
  }

  form {
    align-items: baseline;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    text-align: start;
    padding: 0 10px 0 10px;

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
    height: 265px;

    @media (min-width: 1024px) {
      height: 310px;
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

  span {
    margin-left: 15px;
  }

  button {
    margin-left: 15px;
  }
`;
