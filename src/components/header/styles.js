import styled from "styled-components";
import { FiEdit } from "react-icons";

export const Container = styled.div`
  height: 10vh;
  width: 100vw;

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: -2px 6px 15px -5px rgba(0, 0, 0, 0.84);

  figure {
    margin-left: 20px;
  }

  span {
    font-size: 32px;
    cursor: pointer;
  }

  div {
    margin-right: 15px;
  }

  section {
    display: none; //trocar pra flex
    margin-right: 20px;
    align-items: center;
    cursor: pointer;

    @media (max-width: 630px) {
      margin-right: 3px;
    }

    p {
      display: none;
    }

    @media (max-width: 630px) {
      span {
        display: none;
      }

      p {
        font-size: 25px;
        display: inline;
        margin-right: 8px;
      }
    }
  }
`;
