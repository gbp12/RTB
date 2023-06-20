const tweetService = require("../services/tweets");

const getAllTweets = async (req, res) => {
  const allTweets = await tweetService.getAllTweets();
  res.send({ data: allTweets });
};

const getTweetById = async (req, res) => {
  const tweet = await tweetService.getTweetById(req.params.tweetId);
  res.send({ data: tweet });
};

const createTweet = async (req, res) => {
  const newTweet = await tweetService.createTweet(req.body);
  res.send({ data: newTweet });
};

const updateTweet = async (req, res) => {
  const updatedTweet = await tweetService.updateTweet(req.body);
  res.send({ data: updatedTweet });
};

const deleteTweet = async (req, res) => {
  const deletedTweet = await tweetService.deleteTweet(req.id);
  res.send({ data: deletedTweet });
};

module.exports = {
  getAllTweets,
  getTweetById,
  createTweet,
  updateTweet,
  deleteTweet,
};
