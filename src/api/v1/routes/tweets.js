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
  [body("text").isLength({ min: 3 })],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const data = matchedData(req);

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
