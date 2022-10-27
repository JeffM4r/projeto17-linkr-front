import { AiOutlineComment } from 'react-icons/ai'
import { SlPaperPlane } from 'react-icons/sl'
import {
  Container,
  Comment,
  Message,
  CommentButton,
  InputCommentArea,
  Input
} from './style'

const CommentsComponent = ({ display }) => {

  const userImg = localStorage.getItem('pictureUrl')

  return (
    <Container display={display}>
      <Comment>
        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWvcSx7lBi1Hcb--iKthqRLf4zBkeuyk-slA&usqp=CAU'} />
        <div>
          <p>UserNmae <h5> • following</h5></p>
          <Message>Ok testing</Message>
        </div>
      </Comment>
      <Comment>
        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWvcSx7lBi1Hcb--iKthqRLf4zBkeuyk-slA&usqp=CAU'} />
        <div>
          <p>UserNmae <h5> • following</h5></p>
          <Message>Ok testing</Message>
        </div>
      </Comment>
      <InputCommentArea>
        <img src={userImg} />
        <Input>
          <input placeholder='write a comment...'/>
          <SlPaperPlane />
        </Input>
      </InputCommentArea>
    </Container>
  )
}

const CommentsButton = ({ showComments, setShowComments }) => {
  return (
    <CommentButton onClick={() => {setShowComments(!showComments)}} >
      <AiOutlineComment />
      <p>0</p>
    </CommentButton>
  )
}

export {
  CommentsComponent,
  CommentsButton
}