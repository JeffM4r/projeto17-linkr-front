import axios from 'axios';
import { useEffect, useState } from 'react';
import HashtagComponent from '../HashtagComponent';
import {
  Container,
  TrendsArea
} from './style'

function getHashtagList () {
  const promise = axios.get('http://localhost:4000/hashtags')
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
      console.log(resp.data)
    })
  }, [])

  return (
    <Container>
      <h1>trending</h1>
      <TrendsArea>
        {
          hashtagList.map((hashtag) => {
            return (
              <div>
                <HashtagComponent hashtag={hashtag.text} />
              </div>
            )
          })
        }
      </TrendsArea>
    </Container>
  )
}

export default TrendingComponent;