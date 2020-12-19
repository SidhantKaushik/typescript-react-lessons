import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ name, tweets }: any) => {
  return (
    <div className="tweet-list">
      {tweets.map((tweet: any) => (
        <Tweet name={name} message={tweet} />
      ))}
    </div>
  );
};

export default TweetList;
