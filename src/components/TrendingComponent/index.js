import axios from 'axios';
import { useEffect, useState } from 'react';
import HashtagComponent from '../HashtagComponent';
import {
  Container,
  TrendsArea
} from './style'

function getHashtagList () {
  const promise = axios.get('https://xprojeto17-linkr.herokuapp.com/hashtags')
  return promise;
}

const TrendingComponent = () => {

  const [hashtagList, setHashtagList] = useState([])

  useEffect(() => {
    const promise = getHashtagList()
    promise.catch((error) => {
      console.log(error)
    })
    promise.then((resp) => {
      setHashtagList(resp.data)
    })
  }, [])

  return (
    <Container>
      <h1>trending</h1>
      <TrendsArea>
        {
          hashtagList.map((hashtag, index) => {
            return (
              <div key={index}>
                <HashtagComponent hashtag={hashtag.text}/>
              </div>
            )
          })
        }
      </TrendsArea>
    </Container>
  )
}

export default TrendingComponent;