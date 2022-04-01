import styled from "styled-components";

export const Container = styled.footer`
  align-items: center;
  background-color: var(--blue-80);
  display: flex;
  flex-wrap: wrap;
  height: 10vh;
  justify-content: center;
  justify-content: space-around;
  width: 100vw;

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
