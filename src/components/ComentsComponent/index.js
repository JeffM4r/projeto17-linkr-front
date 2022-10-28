import { useEffect, useState } from 'react'
import { AiOutlineComment } from 'react-icons/ai'
import { SlPaperPlane } from 'react-icons/sl'
import { getPostComments, insertPostComment } from '../../services/linkr'
import {
  Container,
  CommentStyle,
  Message,
  CommentButton,
  InputCommentArea,
  Input
} from './style'

const Comment = ({ userImg, userName, text, following, owner, key }) => {
  let aditional = ''
  if(following) aditional = '• following'
  if(owner) aditional = "• post's author"
  return (
    <CommentStyle key={key}>
      <img src={userImg} />
      <div>
        <p>{userName} <h5>{aditional}</h5></p>
        <Message>{text}</Message>
      </div>
    </CommentStyle>
  )
}

const CommentsComponent = ({ display, postId, setCommentsCount }) => {

  const userImg = localStorage.getItem('pictureUrl')
  const token = localStorage.getItem('linkrUserToken')

  const [postComments, setPostComments] = useState([])
  const [commentText, setCommentText] = useState('')


  useEffect(() => {
    getUpdateComments();
  }, [])

  function getUpdateComments() {
    getPostComments(token, postId)
    .then((resp) => {
      setPostComments(resp.data)
      setCommentsCount(resp.data.length)
    })
    .catch((err) => {
      console.error(err)
    })
  }

  function handleSendComment() {
    if(!commentText) return;
    insertPostComment(token, postId, commentText)
    .then((resp) => {
      setCommentText('')
      getUpdateComments()
    })
    .catch((err) => {
      console.error(err)
    })
  }

  return (
    <Container display={display}>

      {postComments.map((comment, index) => {
        return (
          <Comment 
            userImg={comment.picture}
            userName={comment.name}
            text={comment.text}
            following={comment.followed}
            owner={comment.owner}
            key={index}
          />
        );
      //userImg={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWvcSx7lBi1Hcb--iKthqRLf4zBkeuyk-slA&usqp=CAU'}
      })}
      

      <InputCommentArea>
        <img src={userImg} />
        <Input>
          <input 
            placeholder='write a comment...'
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <div onClick={handleSendComment}>
            <SlPaperPlane />
          </div>
        </Input>
      </InputCommentArea>
    </Container>
  )
}

const CommentsButton = ({ showComments, setShowComments, commentsCount }) => {
  return (
    <CommentButton onClick={() => {setShowComments(!showComments)}} >
      <AiOutlineComment />
      <p>{commentsCount}</p>
    </CommentButton>
  )
}

export {
  CommentsComponent,
  CommentsButton
}