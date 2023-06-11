const tweetService = require("../services/tweets");

const getAllTweets = (req, res) => {
  const allTweets = tweetService.getAllTweets();
  res.send({ data: allTweets });
};

const getTweetById = (req, res) => {
  const tweet = tweetService.getTweetById(req.params.tweetId);
  res.send({ data: tweet });
};

const createTweet = (req, res) => {
  const newTweet = tweetService.createTweet(req.body);
  res.send({ data: newTweet });
};

const updateTweet = (req, res) => {
  const updatedTweet = tweetService.updateTweet(req.body);
  res.send({ data: updatedTweet });
};

const deleteTweet = (req, res) => {
  const deletedTweet = tweetService.deleteTweet(req.body);
  res.send({ data: deletedTweet });
};

module.exports = {
  getAllTweets,
  getTweetById,
  createTweet,
  updateTweet,
  deleteTweet,
};
