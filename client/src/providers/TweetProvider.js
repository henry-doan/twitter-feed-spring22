import React, { useState } from 'react';
import axios from 'axios';

export const TweetContext = React.createContext()

export const TweetConsumer = TweetContext.Consumer

const TweetProvider = ({ children }) => {
  const [tweets, setTweets] = useState([])

  const getAllTweets = () => {
    axios.get('/api/tweets')
      .then( res => setTweets(res.data))
      .catch( err => console.log(err))
  }

  return (
    <TweetContext.Provider value={{
      tweets,
      getAllTweets,
    }}>
      { children }
    </TweetContext.Provider>
  )
}

export default TweetProvider;