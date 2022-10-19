import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  margin: auto;
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
    h1{
      font-size: 106px;
      font-family: 'Passion One', cursive;
    }
    h2{
      font-size: 43px;
      font-family: 'Oswald', sans-serif;
    }
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
`;