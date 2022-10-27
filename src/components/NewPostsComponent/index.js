import { useEffect, useState } from 'react';
import useInterval from 'use-interval';
import { TfiReload } from 'react-icons/tfi';
import { getPostsCount, getAllRecentPosts } from '../../services/linkr';
import {
  Container
} from './style'

const iconStyle = {
  margin: '10px'
}

const NewPosts = ({ view, setView, setPosts, setLoadingFullPage }) => {

  const [lastPostsCount, setLastPostsCount] = useState()
  const [postsCount, setPostsCount] = useState()
  const [newPosts, setNewPosts] = useState(0)
  const token = localStorage.getItem("linkrUserToken")

  useEffect(() => {
    updateCount()
  }, [])

  function updateCount () {
    getPostsCount(token)
    .then((resp) => {
      const count = resp.data.count
      if(lastPostsCount && parseInt(lastPostsCount) < parseInt(count)){
        setPostsCount(count)
        setNewPosts(count - lastPostsCount);
        setView(true)
      }else if(!lastPostsCount){
        setLastPostsCount(count)
      }
    })
    .catch((err) => {
      console.error(err)
    })
  }

  function handleGetUpdate () {
    setLoadingFullPage(true)
    setView(false)
    setLastPostsCount(postsCount)
    getAllRecentPosts(token)
    .then((resp) => {
      setPosts(resp.data)
      setLoadingFullPage(false)
    })
    .catch((err) => {
      setLoadingFullPage(false)
      console.error(err)
    })
  }

  useInterval(() => {
    updateCount()
  }, 15000)

  return (
    view ? 
    <Container onClick={handleGetUpdate}>
      <p>{newPosts} {newPosts > 1 ? 'new posts' : 'post'}, load more!</p>
      <TfiReload style={iconStyle} />
    </Container>
    : <></>
  )
}

export default NewPosts;