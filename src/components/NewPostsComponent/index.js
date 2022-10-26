import { useState } from 'react';
import { TfiReload } from 'react-icons/tfi';
import {
  Container
} from './style'

const iconStyle = {
  margin: '10px'
}

const NewPosts = () => {

  const [newPostsCount, setNewPostsCount] = useState('0')

  return (
    <Container>
      <p>{newPostsCount} new posts, load more!</p>
      <TfiReload style={iconStyle} />
    </Container>
  )
}

export default NewPosts;