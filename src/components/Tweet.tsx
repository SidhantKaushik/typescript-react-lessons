import React from "react";

const Tweet = ({ name, message }: any) => {
  const deleteTweet = () => {
    console.log("hel");
  };
  return (
    <div className="Tweet">
      <h2>{name}</h2>
      <h3>{message}</h3>
      <button onClick={deleteTweet}>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
