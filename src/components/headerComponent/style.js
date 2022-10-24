import styled from "styled-components";

export const SearchList = styled.span`
   cursor: default;
   width: 40vw;
   padding-top: 10px;
   padding-bottom: 5px;
   display: ${(props) => props.display};
   flex-direction: column;
   background-color: #e7e7e7;
   top: 52px;
   position: fixed;
   z-index: 10;
   border-bottom-right-radius: 8px;
   border-bottom-left-radius: 8px;
   @media (max-width: 614px) {
      position: absolute;
		top: 38px;
      width: 91vw;
	}
   @media (max-width:400px){
      width: 85vw;
   }
`;

export const InputStyle = styled.div`
position: absolute;
top: 85px;
left: 15px;
input {
         outline: none;
         border: none;
         width: 91vw;
         height: 45px;
         border-radius: 8px;
         padding-left: 10px;
         font-size: 20px;
         z-index: 13;
      }
      input::placeholder {
         color: #c6c6c6;
         font-size: 19px;
      }
      input:focus::placeholder {
         color: transparent;
      }
   h2 {
      color: white;
      font-size: 49px;
      font-family: "Passion One", cursive;
   }
   h2:hover {
      cursor: pointer;
   }
   @media (max-width: 400px) {
			input{
            width: 85vw;
         };
	}
   @media (min-width:614px){
      display: none;
   }
`

export const HeaderStyle = styled.div`
   background-color: #151515;
   width: 100vw;
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 72px;
   padding: 0 20px;
   position: fixed;
   top: 0px;
   left: 0px;
   z-index: 1000;
   @media (max-width:614px) {
      div:nth-child(2){
         display: none;
      }
   }
   div:nth-child(2) {
      position: relative;
      input {
         outline: none;
         border: none;
         width: 40vw;
         height: 45px;
         border-radius: 8px;
         padding-left: 10px;
         font-size: 20px;
      }
      input::placeholder {
         color: #c6c6c6;
         font-size: 19px;
      }
      input:focus::placeholder {
         color: transparent;
      }
   }
   h2 {
      color: white;
      font-size: 49px;
      font-family: "Passion One", cursive;
   }
   h2:hover {
      cursor: pointer;
   }
   div:nth-child(3) {
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
   font-family: "Lato", sans-serif;
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
   display: ${(props) => props.display};
   align-items: center;
   justify-content: center;
   cursor: pointer;
   &:hover {
      filter: contrast(90%);
   }
`;
export const SearchUserStyle = styled.span`
   display: flex;
   align-items: center;
   height: 60px;
   width: 100%;
   box-sizing: border-box;
   img {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      margin-left:18px;
      margin-right: 15px;
   }
   h3 {
      font-size: 20px;
      color: #515151;
   }
   &:hover{
      cursor: pointer;
      background-color:lightgray;
   }
`;
