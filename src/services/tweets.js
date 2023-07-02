const Tweet = require("../database/Tweet");
const getAllTweets = (tweetCount) => {
  return Tweet.getAllTweets(tweetCount);
};

const getTweetById = (id) => {
  return Tweet.getTweetById(id);
};

const createTweet = (newTweet) => {
  return Tweet.createTweet(newTweet);
};

const updateTweet = (tweet) => {
  return Tweet.updateTweet(tweet);
};

const deleteTweet = (id) => {
  return Tweet.deleteTweet(id);
};

module.exports = {
  getAllTweets,
  getTweetById,
  createTweet,
  updateTweet,
  deleteTweet,
};
