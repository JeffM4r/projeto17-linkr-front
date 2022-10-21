import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 400px;
  background-color: #171717;
  margin-left: 40px;
  margin-top: -400px;
  border-radius: 15px;
  padding: 10px;
  color: white;

  h1 {
    font-size: 27px;
    font-weight: 700;
    font-family: Oswald, sans-serif;
    padding-bottom: 15px;
    border-bottom: 1px solid #484848;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const TrendsArea = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-top: 10px;

  p {
    font-size: 19px;
    font-weight: 700;
    font-family: Lato, sans-serif;
    margin-top: 5px;

    &:hover{
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;