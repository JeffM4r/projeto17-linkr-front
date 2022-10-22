import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderComponent from "../../headerComponent";
import TrendingComponent from "../../TrendingComponent";
import Post from "../../PostComponent";
import {
  Container,
  UserPosts
} from './style'

function getUserInfo (userId) {
  const promise = axios.get(`http://localhost:4000/user/${userId}`)
  return promise;
}

const UserInfoPage = () => {
  const params = useParams()

  const [userInfo, setUserInfo] = useState()
  const [loading, setLoading] = useState(false)
  const userId = params.id

  useEffect(() => {
    setLoading(true)
    const promise = getUserInfo(userId);
    promise.catch((error) => {
      console.log(error)
      setLoading(false)
    })
    promise.then((resp) => {
      setUserInfo(resp.data)
      console.log(resp.data)
      setLoading(false)
    })
  }, [])

  return (
    <Container>
      <HeaderComponent />
      <UserPosts>

        {loading ? <>Loading...</> : 
          userInfo ? 
            (
              <div>
                <span>
                  <img src={userInfo.picture} alt={`profile ${userInfo.name}`} />
                  <h2>{userInfo.name}</h2>
                </span>
                <>
                {
                  userInfo.posts.map((post, index) => 
                  <Post
                    username={userInfo.name}
                    picture={userInfo.picture}
                    text={post.text}
                    url={post.url}
                    userId={post.userId}
                    postId={post.id}
                    key={`key ${index}`}
                  />)
                }
                </>
              </div>
            )
          :
            (<h2>404 NOT FOUND!</h2>)
        }

      </UserPosts>
      <TrendingComponent />
    </Container>
  )
}

export default UserInfoPage;