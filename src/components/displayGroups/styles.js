import styled from "styled-components";

export const Container = styled.div`
  border-radius: 4px;
  border: 2px solid transparent;
  background-color: var(--grey-40);
  font-family: var(--main-font);
  font-size: 11px;
  height: auto;
  line-height: 15px;
  margin: 10px;
  padding: 8px;
  text-align: start;
  width: 90%;
  cursor: pointer;

  h3 {
    font-weight: 600;
    font-size: 12px;
  }

  h4 {
    font-weight: 500;
  }

  &:hover {
    box-shadow: 1px 1px 1px 0 var(--grey-60);
    transform: scale(1.02);
  }

  @media (min-width: 1024px) {
    font-size: 12px;

    h3 {
      font-size: 14px;
    }

    h4 {
      font-size: 13px;
    }
  }
`;
