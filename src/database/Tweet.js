const DB = require("./db");

const getAllTweets = () => {
  return DB.tweets;
};

const getTweetById = (id) => {
  return DB.tweets.find((tweet) => tweet.id === id);
};

const createTweet = (tweet) => {
  DB.tweets.push(tweet);
  return tweet;
};

const updateTweet = (tweet) => {
  const index = DB.tweets.findIndex((w) => w.id === tweet.id);
  DB.tweets[index] = tweet;
  return tweet;
};

const deleteTweet = (tweet) => {
  const index = DB.tweets.findIndex((w) => {
    return parseInt(w.id) === parseInt(tweet.id);
  });
  if (index === -1) {
    return "Tweet not found";
  }
  DB.tweets.splice(index, 1);
  return "Tweet deleted";
};

module.exports = {
  getAllTweets,
  getTweetById,
  createTweet,
  updateTweet,
  deleteTweet,
};
