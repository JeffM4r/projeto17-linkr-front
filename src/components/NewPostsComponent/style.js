import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #1877F2;
  border-radius: 15px;
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  p{
    font-size: 16;
    font-weight: 400;
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 614px) {
    border-radius: 0;
  }
`;