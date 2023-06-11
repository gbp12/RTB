const DB = require("./db");

const getAllTweets = () => {
  return DB.tweets;
};

const getTweetById = (id) => {
  return DB.tweets.find((tweet) => tweet.id === id);
};

const createtweet = (tweet) => {
  DB.tweets.push(tweet);
  return tweet;
};

const updatetweet = (tweet) => {
  const index = DB.tweets.findIndex((w) => w.id === tweet.id);
  DB.tweets[index] = tweet;
  return tweet;
};

module.exports = {
  getAllTweets,
  getTweetById,
  createtweet,
  updatetweet,
};
