import styled from "styled-components";

export const HeaderStyle = styled.div`
   background-color: #151515;
   width: 100vw;
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 72px;
   padding: 0 20px;
   position: fixed;
   top:0px;
   left:0px;
   z-index: 1000;
   
   h2 {
      color: white;
      font-size: 49px;
      font-family: "Passion One", cursive;
   }
   h2:hover{
      cursor: pointer;
   }
   div {
      display: flex;
      cursor: pointer;
      align-items: center;
      img {
         border-radius: 50%;
         width: 53px;
         height: 53px;
      }
   }
`;
export const LogoutStyle = styled.div`
    background-color: #171717;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 17px;
    color: white;
    position: fixed;
    z-index: 2000;
    top: 70px;
    right: -20px;
    width: 150px;
    height: 47px;
    padding-right: 30px;
    border-radius: 0 0 20px 20px;
    display: ${props => props.display };
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover{
        filter: contrast(90%);
    }
`