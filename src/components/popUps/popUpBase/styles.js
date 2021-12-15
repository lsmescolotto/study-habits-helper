import styled from "styled-components";

export const Container = styled.div`
  background: rgb(51, 51, 51, 0.5);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 8;
`;

export const PopUpContainer = styled.div`
  background-color: var(--white);
  border-radius: 4px;
  color: black;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 300px;
  min-height: 345px;
  padding: 0 10px;
  position: fixed;
  right: 0;
  top: 80px;
  width: 90%;

  @media (min-width: 768px) {
    min-height: 400px;
    max-width: 400px;
    padding: 0 15px;
  }
`;

export const PopUpHeader = styled.div`
  align-items: center;
  border-bottom: 2px solid var(--grey-40);
  display: flex;
  flex-direction: row;
  height: 60px;
  justify-content: space-between;
  padding: 3px 5px;
  
  h3 {
    color: var(--black-50);
    font-family: var(--main-font);
    font-size: 14px;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    h3 {
      font-size: 18px;
    }
  }
`;

export const PopUpBody = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  margin-top: 10px;
  padding: 15px 5px;
  text-align: center;
`;
