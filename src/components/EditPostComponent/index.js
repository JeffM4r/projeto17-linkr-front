import { editPost, getAllRecentPosts } from "../../services/linkr";
import EditPost from "./style";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Edit({
   editOn,
   inputText,
   setInputText,
   setEditOn,
   disabled,
   setDisabled,
   postId,
   setPosts,
}) {
   const { setToken, token } = useContext(UserContext);
   const localToken = localStorage.getItem("linkrUserToken");
   setToken(localToken);

   return (
      <EditPost style={{ display: editOn ? "inherit" : "none" }}>
         <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            disabled={disabled}
            onKeyDown={(e) => {
               if (e.code === "Escape") {
                  setEditOn(false);
               }
               if (e.code === "Enter") {
                  const promise = editPost(postId, token, { text: inputText });
                  setDisabled(true);
                  promise
                     .catch((res) => {
                        alert("Não foi possível salvar as alterações");
                        console.log(res);
                        setDisabled(false)
                     })
                     .then(() => {
                        getAllRecentPosts(token)
                           .then((resp) => {
                              const postsData = resp.data;
                              setPosts(postsData);
                              setEditOn(false);
                           })
                           .catch((err) => {
                              console.error(err);
                              alert("Não foi possível salvar as alterações");
                              setDisabled(false)
                           });
                     });
               }
            }}
         />
      </EditPost>
   );
}
