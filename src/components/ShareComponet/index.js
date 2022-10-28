import { useState } from 'react';
import { BiRepost } from 'react-icons/bi';
import Post from '../PostComponent';
import ConfirmModal from '../ConfirmModal';
import { sharePost, getAllRecentPosts } from '../../services/linkr';
import {
  Button,
  Repost,
  RepostTitle
} from './style'

const iconStyle = {
  color: "white",
  fontSize: "25px",
  cursor: "pointer",
  marginTop: "10px"
};

const iconStyleStatic = {
  color: "white",
  fontSize: "25px",
  margin: "3px"
};

const ShareButton = ({ shareCount, postId, setLoadingFullPage, setPosts }) => {

  const token = localStorage.getItem("linkrUserToken")

  const [viewModal, setViewModal] = useState(false)

  function updatePosts () {
    setLoadingFullPage(true)
    getAllRecentPosts(token)
    .then((resp) => {
      setPosts(resp.data)
      setLoadingFullPage(false)
    })
    .catch((err) => {
      setLoadingFullPage(false)
      console.error(err)
      alert(`An error occurred while updating posts!`)
    })
  }
  
  function handleShare () {
    setViewModal(false)
    sharePost(token, postId)
    .then((resp) => {
      updatePosts()
    })
    .catch((err) => {
      console.error(err)
      if(err.response.status === 409) {
        alert(`You already re-posted this link!`)
      }else{
        alert(`An error occurred while reposting the link!`)
      }
    })

  }

  return (
    <>
      <Button onClick={() => {setViewModal(true)}} >
        <BiRepost style={iconStyle} />
        <p>{shareCount}</p>
      </Button>
      {viewModal ? <ConfirmModal confirmFunct={handleShare} refuseFunct={() => {setViewModal(false)}} /> : <></>}
    </>
  )
}

const ShareComponent = ({post, setPosts, setLoadingFullPage, key}) => {
  return (
    <Repost>
      <RepostTitle>
        <BiRepost style={iconStyleStatic} />
        <p>Re-posted by <h5>{` ${post.reposter ? 'you' : post.sharedBy}`}</h5></p>
      </RepostTitle>
      <Post
        setLoadingFullPage={setLoadingFullPage}
        setPosts={setPosts}
        username={post.name}
        picture={post.picture}
        text={post.text}
        url={post.url}
        userId={post.userId}
        postId={post.postId}
        owner={post.owner}
        likedAlready={post.liked}
        key={`key ${key}`}
      />
    </Repost>
  )
}

export {
  ShareButton,
  ShareComponent
}