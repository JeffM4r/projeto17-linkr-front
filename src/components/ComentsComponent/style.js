import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #1E1E1E;
  margin-top: -40px;
  margin-bottom: 20px;
  border-radius: 15px;
  padding: 30px;

  display: ${props => props.display === true ? "inherit" : "none"};

  @media (max-width: 614px){
    border-radius: 0;
  }
`;

export const CommentStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  border-bottom: 1px solid #353535;
  padding-bottom: 15px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 25px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    p{
      display: flex;
      flex-direction: row;
      font-size: 14px;
      font-weight: 700;
      color: #F3F3F3;
      margin-bottom: 5px;
    }
    h5{
      margin: 0 5px;
      color: #565656;
      font-weight: 400;
    }
  }
`;

export const Message = styled.span`
  margin-top: 7px;
  color: #ACACAC;
  font-size: 14px;
  font-weight: 400;
`;

export const CommentButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  p{
    font-size: 13px;
  }
  &:hover{
    cursor: pointer;
  }
`;

export const InputCommentArea = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  img {
    width: 40px;
    height: 40px;
    border-radius: 25px;
  }
  `;

export const Input = styled.div`
  background-color: #252525;
  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 100%;
  padding: 0 10px;
  margin-left: 20px;
  border-radius: 10px;
  input{
    width: 90%;
    height: 40px;
    padding: 5px;
    border: 0;
    background-color: #252525;
    color: #acacac;

    &:focus {
      outline: none;
    }
  }
`;