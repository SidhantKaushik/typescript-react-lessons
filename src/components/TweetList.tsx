import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ name, tweets, setTweets }: any) => {
  return (
    <div className="tweet-list">
      {tweets.map((tweet: any) => (
        <Tweet
          name={name}
          tweet={tweet}
          setTweets={setTweets}
          tweets={tweets}
          key={tweet.id}
        />
      ))}
    </div>
  );
};

export default TweetList;
