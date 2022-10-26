import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderComponent from "../../headerComponent";
import TrendingComponent from "../../TrendingComponent";
import Post from "../../PostComponent";
import { Container, UserPosts, FolllowButton } from "./style";
import { followUser, getUserInfo, unfollowUser } from "../../../services/linkr";

const UserInfoPage = () => {
   const params = useParams();
   const token = localStorage.getItem("linkrUserToken");

   const [userInfo, setUserInfo] = useState();
   const [loading, setLoading] = useState(false);
   const [isFollowing, setIsFollowing] = useState(false);
   const userId = params.id;

   useEffect(() => {
      setLoading(true);
      //verifica se ta seguindo ou nao e muda o isfollowing
      const promise = getUserInfo(userId, token);
      promise.catch((error) => {
         console.log(error);
         setLoading(false);
      });
      promise.then((resp) => {
         setUserInfo(resp.data);
         setLoading(false);
      });
   }, []);
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
                        // display={userInfo.id ==  ? 'none' : 'flex'}
                        //request para identifcar userId do usuario
                        DisableButton
                        color={isFollowing ? "#1877F2" : "#FFFFFF"}
                        background={isFollowing ? "#FFFFFF" : "#1877F2"}
                        onClick={() => {
                           if (isFollowing === false) {
                              //disable button
                              followUser( userInfo.id, token)
                                 .catch((res) => console.log(res))
                                 .then((res) => {
                                    console.log(res);
                                    setIsFollowing(true);
                                    //able button
                                 });
                           } else {
						    //disable button
                              unfollowUser(userInfo.id, token)
                                 .catch((res) => console.log(res))
                                 .then((res) => {
                                    console.log(res);
                                    setIsFollowing(false);
                                 });
                           }
                        }}
                     >
                        {isFollowing ? "Unfollow" : "follow"}
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
