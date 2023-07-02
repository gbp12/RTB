const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const hostname = "127.0.0.1";
const port = 3000;
const app = express();
const server = app.listen(port);
const v1Routes = require("./api/v1/routes/index.js");
const tweetRoutes = require("./api/v1/routes/tweets.js");
const userRoutes = require("./api/v1/routes/users.js");
const jtw = require("jsonwebtoken");
const pool = require("../config/database");
app.use(cors());
app.use(bodyParser.json());

/* enrutamiento */
app.use("/api/v1", v1Routes);
app.use("/api/v1/tweets", tweetRoutes);
app.use("/api/v1/users", userRoutes);
app.post("/api/v1/login", async (req, res) => {
  const { username, password } = req.body;
  pool.query(
    `select * from usuarios WHERE usuarios.nombre = '${username}' ;`,
    (err, result) => {
      if (err) {
      } else {
        if (result.rows.length > 0) {
          if (result.rows[0].contraseña == password) {
            const token = jtw.sign(
              {
                username: username,
                password: password,
                userId: result.rows[0].id,
              },
              "shhhElSecreto",
              {
                expiresIn: "1h",
              }
            );
            res.status(200).json({
              auth: true,
              token: token,
            });
          } else {
            res.status(401).json({
              message: "Autenticacion incorrecta",
            });
          }
        } else {
          res.status(401).json({
            message: "Autenticacion incorrecta",
          });
        }
      }
    }
  );
});
