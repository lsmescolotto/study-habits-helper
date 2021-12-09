import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0 5px 5000px rgb(51, 51, 51, 0.5);
  left: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 300px;
  min-height: 345px;
  right: 0;
  padding: 0 10px;
  position: absolute;
  width: 90%;
  z-index: 3;

  @media (min-width: 768px) {
    min-height: 400px;
    max-width: 400px;
    padding: 0 15px;
  }
`;

export const PopUpHeader = styled.div`
  align-items: center;
  border-bottom: 2px solid #f5f5f5;
  display: flex;
  flex-direction: row;
  height: 60px;
  justify-content: space-between;
  padding: 3px 5px;

  h3 {
    font-weight: bold;
    font-size: 14px;
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
  margin-top: 20px;
  padding: 15px 5px;
  text-align: center;
`;
