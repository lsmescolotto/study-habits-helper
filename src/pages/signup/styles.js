import styled from "styled-components";

export const Image = styled.img`
  display: none;

  @media only screen and (min-width: 900px){
    display: inline-block;
  }

`

export const Desktop = styled.div`
  display: flex;
  justify-content: space-around;
`

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;


export const Content = styled.section`

height: 80vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
font-style: var(--main-font);

h2 {
    font-size: 28px;
    font-family: var(--title-font);
    color: var(--black-100);

  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  input {
    width: 250px;
  }
  
`;


export const SignUpBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: fit-content;
  width: 300px;


  border-radius: 8px;
  box-shadow: 4px 5px 4px var(--grey-90);
`;

export const LoginRedirectBox = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding: 20px 30px;
  border-radius: 8px;
  box-shadow: 4px 5px 4px var(--grey-90);
`;
