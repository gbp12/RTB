const express = require("express");
const tweetController = require("../../../controllers/tweets");
const router = express.Router();
const { validationResult, body, matchedData } = require("express-validator");

router.route("/").get((req, res) => {
  tweetController.getAllTweets(req, res);
});
router.route("/:tweetId").get((req, res) => {
  tweetController.getTweetById(req, res);
});
router.route("/create").post([
  (req, res) => {
    tweetController.createTweet(req, res);
  },
]);
router.route("/update").patch((req, res) => {
  tweetController.updateTweet(req, res);
});
router.route("/delete").delete((req, res) => {
  tweetController.deleteTweet(req, res);
});

module.exports = router;
