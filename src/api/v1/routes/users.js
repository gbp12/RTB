const express = require("express");
const router = express.Router();
const jtw = require("jsonwebtoken");
const userController = require("../../../controllers/users");

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

router.route("/:userId").get(
  /*verifyJTW*/ (req, res) => {
    userController.getUserById(req, res);
  }
);
router.route("/create").post([verifyJTW, (req, res) => {}]);
router.route("/:userId").patch(verifyJTW, (req, res) => {
  console.log(req.body);
  console.log(req.params);
  /*  userController.patchUserById(req, res);*/
});
router.route("/delete/:id").delete(verifyJTW, (req, res) => {});

module.exports = router;
