const Tweet = require("../database/Tweet");
const getAllTweets = () => {
  return Tweet.getAllTweets();
};

const getTweetById = (id) => {
  return Tweet.getTweetById(id);
};

const createTweet = () => {
  return;
};

const updateTweet = () => {
  return;
};

const deleteTweet = () => {
  return;
};

module.exports = {
  getAllTweets,
  getTweetById,
  createTweet,
  updateTweet,
  deleteTweet,
};
