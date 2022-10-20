import { HeaderStyle, LogoutStyle } from "./style";
import {
   MdOutlineKeyboardArrowUp,
   MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";

const HeaderComponent = () => {
   const navigate = useNavigate();
   const { setToken } = useContext(UserContext);
   const [clicked, setClicked] = useState(false);
   const styleUp = {
      color: "white",
      fontSize: "2.5em",
      display: clicked ? "" : "none",
   };
   const styleDown = {
      color: "white",
      fontSize: "2.5em",
      display: clicked ? "none" : "",
   };

   return (
      <>
         <HeaderStyle>
            <h2>linkr</h2>
            <div onClick={() => setClicked(!clicked)}>
               <MdOutlineKeyboardArrowUp style={styleUp} />
               <MdOutlineKeyboardArrowDown style={styleDown} />
               <img
                  src="https://3d1.com.br/assets/imagens/galerias/e8784ef0732565ed86e91c6b020e0f2e.jpg"
                  alt=""
               />
            </div>
         </HeaderStyle>
         <LogoutStyle
            onClick={() => {
               setToken("");
               navigate("/");
            }}
            display={clicked ? "flex" : "none"}
         >
            Logout
         </LogoutStyle>
      </>
   );
};
export default HeaderComponent;
