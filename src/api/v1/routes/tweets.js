const express = require("express");
const tweetController = require("../../../controllers/tweets");
const router = express.Router();
const { validationResult, body, matchedData } = require("express-validator");

const jtw = require("jsonwebtoken");

const verifyJTW = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({
      message: "Autenticacion incorrecta",
    });
  } else {
    jtw.verify(token, "shhhElSecreto", (err, decoded) => {
      if (err) {
        res.status(401).json({
          message: "Autenticacion incorrecta",
        });
      } else {
        next();
      }
    });
  }
};

router.route("/:tweetCount").get(verifyJTW, (req, res) => {
  tweetController.getAllTweets(req, res);
});
router.route("/:tweetId").get(verifyJTW, (req, res) => {
  tweetController.getTweetById(req, res);
});
router.route("/create").post([
  verifyJTW,
  (req, res) => {
    tweetController.createTweet(req, res);
  },
]);
router.route("/update").patch(verifyJTW, (req, res) => {
  tweetController.updateTweet(req, res);
});
router.route("/delete/:id").delete(verifyJTW, (req, res) => {
  tweetController.deleteTweet(req.params, res);
});

module.exports = router;
