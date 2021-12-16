import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  section {
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: start;
    border: 1px solid black;
    margin: 5px;
    padding: 15px;
    border-radius: 5px;
    border: 1px solid var(--grey-60);

    div {
      display: flex;
      align-items: center;

      h1{
        font-size: 25px;
        font-weight: 500;
        
      }

      h3 {
        font-size: 18px;
        font-weight: 500;
        margin-left: 15px;
        font-family: var(--main-font)
      }
      }

      p{
        margin: 10px 0 0 5px;
        font-size: 18px;
        font-family: var(--main-font);
        };
    }
  }

 
`;
