const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const hostname = "127.0.0.1";
const port = 3000;
const app = express();
const server = app.listen(port);
const v1Routes = require("./api/v1/routes/index.js");
const tweetRoutes = require("./api/v1/routes/tweets.js");

app.use(bodyParser.json());
/* enrutamiento */
app.use("/api/v1", v1Routes);
app.use("/api/v1/tweets", tweetRoutes);
