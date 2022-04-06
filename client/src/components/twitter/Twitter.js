import { TweetConsumer } from "../../providers/TweetProvider";

const Twitter = ({ tweets, getAllTweets }) => {

  return (
    <>
      <h1>Twitter</h1>
      <button onClick={() => getAllTweets() }>
        Get all my Tweets
      </button>

      { tweets.map( t => (
        <div key={t.id}>
          <img src={t.user.profile_image_url} alt='tweet'/>
          <h3>{t.user.name}</h3>
          <p>{t.text}</p>
        </div>
      ))}
      
    </>
  )
}

const ConnectedTwitter = (props) => (
  <TweetConsumer>
    { value => <Twitter {...props} {...value} />}
  </TweetConsumer>
)

export default ConnectedTwitter;