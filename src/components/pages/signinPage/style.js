import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  margin: auto;
  form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  height: 100%;

  color: white;
  background-color: #151515;

  div{
    width: 80%;
    h1{
      font-size: 106px;
      font-family: 'Passion One', cursive;
    }
    h2{
      font-size: 43px;
      font-family: 'Oswald', sans-serif;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    div{
      h1{
        text-align: center;
        font-size: 76px;
      }
      h2{
        text-align: center;
        font-size: 23px;
      }
    }
  }

  @media (max-width: 614px) {
    height: 30%;
  }

`;

export const SignInBody = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  height: 100%;
  color: white;
  background-color: #333333;
  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 614px) {
    height: 70%;
    justify-content: flex-start;
    padding-top: 40px;
  }
`;

export const LoginButton = styled.button`
  width: 80%;
  height: 65px;
  border: 0;
  border-radius: 5px;
  margin: 10px;
  background: #1877F2;
  text-align: center;
  color: white;
  font-size: 27px;
  font-family: 'Oswald', sans-serif;
  &&:hover{
    cursor: pointer;
  }
  @media (max-width: 614px) {
    font-size: 22px;
    height: 55px;
  }
`;

export const GoSignUpBtn = styled.div`
  width: 80%;
  height: 35px;
  border: 0;
  margin: 10px;
  text-align: center;
  color: white;
  font-size: 20px;
  font-family: 'Lato', sans-serif;
  text-decoration: underline;
  &&:hover{
    cursor: pointer;
  }
  @media (max-width: 614px) {
    font-size: 17px;
    height: 25px;
  }
`;