import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   //align-items: center;
   justify-content: center;
   width: 100%;
   height: 100%;
`;

export const UserPosts = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 100%;
   max-width: 700px;
   color: white;
   margin: 145px 0 0 0;

   h2 {
      font-family: "Oswald", sans-serif;
      margin: 0 0 20px 20px;
      font-size: 43px;
   }

   span {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      img {
         height: 50px;
         width: 50px;
         border-radius: 50%;
         margin-bottom: 16px;
      }
   }

   @media (max-width: 614px) {
      h2 {
         margin-left: 40px;
      }
   }
   @media (max-width: 475px) {
      h2 {
         padding-bottom: 50px;
      }
   }
`;

export const FolllowButton = styled.div`
   cursor: pointer;
   display:flex;
   justify-content: center;
   align-items: center;
   background-color: ${(props) => props.background};
   color: ${(props) => props.color};
   border-radius: 5px;
   width: 112px;
   height: 30px;
   position: absolute;
   right: -330px;
   top: 10px;
   font-weight: 700;
   @media (max-width: 1000px) {
      right: 0;
   }
   @media (max-width: 614px) {
      right: 10px;
   }
   @media (max-width: 465px) {
      top: 60px;
   }
   @media (max-width: 327px) {
      top: 110px;
   }
   &:hover {
      filter: contrast(90%);
   }
`;
