import styled from "styled-components";

export const Container = styled.div`

    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  
  .desktopStyle {
    display: flex;
    justify-content: space-around;
  }

  .backgroundImg {
    display: none;
  }

  @media only screen and (min-width: 900px){
  .backgroundImg {
  display: inline-block;
  }
}

`;

export const Content = styled.section`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  font-style: roboto;

  .backgroundImg {
    display: none;
  }

  h2 {
    font-size: 28px;
    font-family: anton;
    color: #323232;

  }

  .signUpBox {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: fit-content;
    width: 300px;


    border-radius: 8px;
    box-shadow: 4px 5px 4px var(--grey-90);
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    width: 250px;
  }

  .signUpBox-login {
    width: 250px;
    display: flex;
    justify-content: space-around;
    padding: 20px 30px;
    border-radius: 8px;
    box-shadow: 4px 5px 4px var(--grey-90);
  }


  
`;
