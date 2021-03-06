import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CreateTweet = ({ tweets, setTweets, textInput, setTextInput }: any) => {
  const userInputHandler = (e: any) => {
    setTextInput(e.target.value);
  };
  const submitTweetHandler = (e: any) => {
    e.preventDefault();
    setTweets([...tweets, { message: textInput, id: uuidv4() }]); //...tells it to keep the previous things and add everything that is new
    setTextInput("");
  };
  return (
    <form onSubmit={submitTweetHandler}>
      <textarea
        value={textInput} /* connects the value to the form box */
        onChange={userInputHandler}
        cols={50}
        rows={5}
      ></textarea>
      <button>Submit</button>
    </form>
  );
};

export default CreateTweet;
