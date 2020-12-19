import React from "react";

const Tweet = ({ name, tweet, setTweets, tweets }: any) => {
  const deleteTweet = () => {
    setTweets(tweets.filter((t: any) => t !== tweet));
  };
  return (
    <div className="Tweet">
      <h2>{name}</h2>
      <h3>{tweet}</h3>
      <button onClick={deleteTweet}>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
