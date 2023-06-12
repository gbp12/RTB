const pool = require("../../config/database");
const getAllTweets = async () => {
  var tweets = await pool.query("SELECT * FROM tweets");
  return tweets.rows;
};

const getTweetById = async (id) => {
  var tweet = await pool.query(`SELECT * FROM tweets WHERE id = ${id}`);
  return tweet.rows[0];
};

const createTweet = (tweet) => {
  pool.query(`INSERT INTO tweets (texto) VALUES ('${tweet.texto}')`);
  return tweet;
};

const updateTweet = async (tweet) => {
  await pool.query(
    `UPDATE tweets SET texto = '${tweet.texto}' WHERE id = ${tweet.id}`
  );
  return tweet;
};

const deleteTweet = async (tweet) => {
  await pool.query(`DELETE FROM tweets WHERE id = ${tweet.id}`);
  return tweet;
};

module.exports = {
  getAllTweets,
  getTweetById,
  createTweet,
  updateTweet,
  deleteTweet,
};
