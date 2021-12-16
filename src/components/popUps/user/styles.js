import styled from "styled-components";

export const Container = styled.div`
  min-height:290px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;

  section {
    min-width:80%;
    margin: 10px;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 15px;
    border: 1px solid var(--grey-90);
    border-radius: 5px;

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

    div button{
      width :220px;
      margin-top:10px
    }
 
  }

  @media (min-width: 768px){
   div button{
     width:300px;
   }
  }

  @media (min-width: 1024px){
   min-height:310px;

   div button{
     width:310px;
   }
  }
`;
