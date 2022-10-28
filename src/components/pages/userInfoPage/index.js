import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderComponent from "../../headerComponent";
import TrendingComponent from "../../TrendingComponent";
import Post from "../../PostComponent";
import { Container, UserPosts, FolllowButton } from "./style";
import {
   followUser,
   getIsFollowing,
   getUserInfo,
   unfollowUser,
} from "../../../services/linkr";

const UserInfoPage = () => {
   const params = useParams();
   const token = localStorage.getItem("linkrUserToken");

   const [able, setAble] = useState(true)
   const [userInfo, setUserInfo] = useState();
   const [loading, setLoading] = useState(false);
   const [isFollowing, setIsFollowing] = useState(false);
   const userId = params.id;

   useEffect(() => {
      setLoading(true);
      const promise = getUserInfo(userId, token);
      promise.catch((error) => {
         console.log(error);
         setLoading(false);
      });
      promise.then((resp) => {
         setUserInfo(resp.data);
         getIsFollowing(userId, token)
            .catch((res) => console.log(res))
            .then((res) => {
            setLoading(false);
			   setIsFollowing(res.data);
            });
      });
   }, [loading]);
   return (
      <Container>
         <HeaderComponent setLoading={setLoading} setUserInfo={setUserInfo} />
         <UserPosts>
            {loading ? (
               <>Loading...</>
            ) : userInfo ? (
               <div>
                  <span>
                     <span>
                        <img
                           src={userInfo.picture}
                           alt={`profile ${userInfo.name}`}
                        />
                        <h2>{userInfo.name}'s posts</h2>
                     </span>
                     <FolllowButton
                        display={userId == isFollowing.userId ? "none" : "flex"}
                        color={isFollowing.bool ? "#1877F2" : "#FFFFFF"}
                        background={isFollowing.bool ? "#FFFFFF" : "#1877F2"}
                        onClick={() => {
                           if (isFollowing.bool === false && able === true) {
                              setAble(false)
                              followUser(userInfo.id, token)
                                 .catch((res) => {
                                    alert(
                                       "Não foi possível executar a operação"
                                    );

                                    console.log(res);
                                    setAble(true)
                                 })
                                 .then((res) => {
                                    console.log(res);
                                    setIsFollowing({
                                       ...isFollowing,
                                       bool: true,
                                    });
                                    setAble(true)
                                                                  });
                           } else if(able === true){
                              setAble(false)
                              unfollowUser(userInfo.id, token)
                                 .catch((res) => {
                                    alert(
                                       "Não foi possível executar a operação"
                                    );
                                    console.log(res);
                                    setAble(true)
                                 })
                                 .then((res) => {
                                    console.log(res);
                                    setIsFollowing({...isFollowing,
									bool:false});
                           setAble(true)
                                 });
                           }
                        }}
                     >
                        {isFollowing.bool ? "Unfollow" : "follow"}
                     </FolllowButton>
                  </span>
                  <>
                     {userInfo.posts.map((post, index) => (
                        <Post
                           username={userInfo.name}
                           picture={userInfo.picture}
                           text={post.text}
                           url={post.url}
                           userId={post.userId}
                           postId={post.postId}
                           owner={post.owner}
                           likedAlready={post.liked}
                           key={`key ${index}`}
                        />
                     ))}
                  </>
               </div>
            ) : (
               <h2>404 NOT FOUND!</h2>
            )}
         </UserPosts>
         <TrendingComponent />
      </Container>
   );
};

export default UserInfoPage;
