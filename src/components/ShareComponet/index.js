import { BiRepost } from 'react-icons/bi';
import Post from '../PostComponent';
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

const ShareButton = () => {
  return (
    <Button>
      <BiRepost style={iconStyle} />
    </Button>
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