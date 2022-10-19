import styled from 'styled-components';

export const Input = styled.input`
  width: 80%;
  height: 65px;
  border-radius: 5px;
  border: 0;
  font-size: 27px;
  padding: 15px;
  margin: 10px;
  font-family: 'Oswald', sans-serif;
  &::placeholder{
    font-size: 27px;
    color: #9F9F9F;
  }
  @media (max-width: 614px) {
    font-size: 22px;
    height: 55px;
    &::placeholder{
      font-size: 22px;
    }
  }
`;