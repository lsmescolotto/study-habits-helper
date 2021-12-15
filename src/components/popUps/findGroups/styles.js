import styled from "styled-components";

export const Container = styled.div`
  font-family: var(--main-font);
  margin: 0;
  padding: 0;

  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0;

    div {
      margin: 0 0 5px 0;
      padding: 0;

      button {
        margin-left: 5px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  font-size: 12px;
  height: 25px;

  button {
    margin-left: 15px;
  }
`;

export const CardsContainer = styled.div`
  height: 170px;
  overflow-x: scroll;

  @media (min-width: 1024px) {
    height: 215px;
  } ;
`;
