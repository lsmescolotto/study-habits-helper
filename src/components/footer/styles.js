import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--blue-80);

  height: 56px;
  width: 100vw;

  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-around;

  a {
    color: var(--blue-50);
    font-family: var(--main-font);
    font-size: 13px;
  }

  a:hover {
    color: var(--blue-40);
    text-shadow: 0 0 var(--white);
  }

  a:active {
    color: var(--white);
  }

  @media (min-width: 768px) {
    a {
      font-size: 14px;
    }
  }
`;
