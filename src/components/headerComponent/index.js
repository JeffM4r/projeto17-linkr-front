import {
   HeaderStyle,
   LogoutStyle,
   SearchUserStyle,
   SearchList,
   InputStyle,
} from "./style";
import {
   MdOutlineKeyboardArrowUp,
   MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { DebounceInput } from "react-debounce-input";
import { getUserInfo, searchUsers } from "../../services/linkr";

function HeaderComponent({ setUserInfo, setLoading }) {
   const navigate = useNavigate();
   const [usersList, setUsersList] = useState([]);
   const { setToken, setPictureUrl, pictureUrl, token } =
      useContext(UserContext);
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
   const styleSearch = {
      position: "absolute",
      right: "13px",
      top: "8px",
      fontSize: "28px",
      color: "#c6c6c6",
   };

   useEffect(() => {
      if (localStorage.getItem("linkrUserToken") !== null) {
         const localToken = localStorage.getItem("linkrUserToken");
         const localPictureUrl = localStorage.getItem("pictureUrl");
         setToken(localToken);
         setPictureUrl(localPictureUrl);
      }
   }, []);

   return (
      <>
         <HeaderStyle>
            <h2 onClick={() => navigate("/timeline")}>linkr</h2>
            <div>
               <DebounceInput
                  minLength={3}
                  debounceTimeout={300}
                  type="text"
                  placeholder="Search for people"
                  onChange={(e) => {
                     if (e.target.value !== "") {
                        searchUsers(token,e.target.value)
                           .catch((err) => console.log(err))
                           .then((res) => {
                              setUsersList(res.data);
                           });
                     } else {
                        setUsersList([]);
                     }
                  }}
               />
               <AiOutlineSearch style={styleSearch} />
               <SearchList display={usersList.length === 0 ? "none" : "flex"}>
                  {usersList[1]?.map((user, index) => (
                     <SearchUserStyle
                        key={index}
                        onClick={() => {
                           navigate(`/user/${user.id}`);
                           setLoading(true);
                           const promise = getUserInfo(user.id, token);
                           promise.catch((error) => {
                              console.log(error);
                              setLoading(false);
                           });
                           promise.then((resp) => {
                              setUserInfo(resp.data);
                              setLoading(false);
                           });
                        }}
                     >
                        <img src={user.picture} alt="user" />
                        <h3>{user.name}</h3>
                        <h4>• following</h4>
                     </SearchUserStyle>
                  ))}
                  {usersList[0]?.map((user, index) => (
                     <SearchUserStyle
                        key={index}
                        onClick={() => {
                           navigate(`/user/${user.id}`);
                           setLoading(true);
                           const promise = getUserInfo(user.id, token);
                           promise.catch((error) => {
                              console.log(error);
                              setLoading(false);
                           });
                           promise.then((resp) => {
                              setUserInfo(resp.data);
                              setLoading(false);
                           });
                        }}
                     >
                        <img src={user.picture} alt="user" />
                        <h3>{user.name}</h3>
                     </SearchUserStyle>
                  ))}
               </SearchList>
            </div>
            <div onClick={() => setClicked(!clicked)}>
               <MdOutlineKeyboardArrowUp style={styleUp} />
               <MdOutlineKeyboardArrowDown style={styleDown} />
               <img
                  src={
                     pictureUrl
                        ? pictureUrl
                        : "https://yt3.ggpht.com/a/AATXAJyAjXWhg85XlBUBufDpYQ7zB7GIiIlg9js4_wCoFA=s900-c-k-c0xffffffff-no-rj-mo"
                  }
                  alt="user"
               />
            </div>
         </HeaderStyle>
         <InputStyle>
            <DebounceInput
               minLength={3}
               debounceTimeout={300}
               type="text"
               placeholder="Search for people"
               onChange={(e) => {
                  if (e.target.value !== "") {
                     searchUsers(e.target.value)
                        .catch((err) => console.log(err))
                        .then((res) => {
                           setUsersList(res.data);
                        });
                  } else {
                     setUsersList([]);
                  }
               }}
            />
            <AiOutlineSearch style={styleSearch} />
            <SearchList display={usersList.length === 0 ? "none" : "flex"}>
               {usersList.map((user, index) => (
                  <SearchUserStyle
                     key={index}
                     onClick={() => {
                        navigate(`/user/${user.id}`);
                        setLoading(true);
                        const promise = getUserInfo(user.id, token);
                        promise.catch((error) => {
                           console.log(error);
                           setLoading(false);
                        });
                        promise.then((resp) => {
                           setUserInfo(resp.data);
                           setLoading(false);
                        });
                     }}
                  >
                     <img src={user.picture} alt="user" />
                     <h3>{user.name}</h3>
                  </SearchUserStyle>
               ))}
            </SearchList>
         </InputStyle>
         <LogoutStyle
            onClick={() => {
               localStorage.clear();
               setToken("");
               navigate("/");
            }}
            display={clicked ? "flex" : "none"}
         >
            Logout
         </LogoutStyle>
      </>
   );
}
export default HeaderComponent;
