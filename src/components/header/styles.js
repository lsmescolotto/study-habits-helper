import styled from "styled-components";

export const Container = styled.header`
  align-items: center;
  box-shadow: 0 0 10px 0px var(--black-60);
  display: flex;
  height: 10vh;
  justify-content: space-between;
  width: 100vw;

  figure {
    margin-left: 20px;
  }

  span {
    cursor: pointer;
    display: inline-block;
    font-size: 32px;
    margin-right: 15px;
    position: relative;
  }

  div {
    margin-right: 15px;
  }

  .tooltip .tooltip-message {
    background-color: var(--white);
    border-radius: 6px;
    border: 1px solid var(--grey-40);
    color: var(--black-50);
    font-family: var(--main-font);
    font-size: 12px;
    padding: 5px 0;
    position: absolute;
    right: 0;
    text-align: center;
    top: 100%;
    visibility: hidden;
    width: 80px;
    z-index: 1;
  }

  .tooltip:hover .tooltip-message {
    visibility: visible;
  }

  .tooltip:hover {
    svg {
      color: var(--blue-60);
    }
  }

  section {
    align-items: center;
    cursor: pointer;
    display: flex;
    margin-right: 20px;

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
        display: inline-block;
        font-size: 25px;
        margin-right: 8px;
        position: relative;
      }
    }
  }

  @media (min-width: 768px) {
    .tooltip:hover {
      svg {
        color: var(--pink-60);
      }
    }
  }
`;
