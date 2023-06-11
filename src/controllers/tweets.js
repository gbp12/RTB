const tweetService = require("../services/tweets");

const getAllTweets = (req, res) => {
  const allTweets = tweetService.getAllTweets();
  res.send({ status: 200, data: allTweets });
};

const getTweetById = (req, res) => {
  const tweet = tweetService.getTweetById(req.params.tweetId);
  res.send({ status: 200, data: tweet });
};

const createTweet = (req, res) => {
  const newTweet = tweetService.createTweet();
};

const updateTweet = (req, res) => {
  const updatedTweet = tweetService.updateTweet();
};

const deleteTweet = (req, res) => {
  const deletedTweet = tweetService.deleteTweet();
};

module.exports = {
  getAllTweets,
  getTweetById,
  createTweet,
  updateTweet,
  deleteTweet,
};
