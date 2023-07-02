const pool = require("../../config/database");
const getAllTweets = async (tweetCount) => {
  var tweets = await pool.query(
    `
    SELECT t.id , t.texto, u.id as userId, u.nombre as userName, u.email as userEmail FROM tweets t left join usuarios u on t.userid = u.id  ORDER BY fecha_creacion DESC OFFSET ${tweetCount} LIMIT 10;
`
  );
  return tweets.rows;
};

const getTweetById = async (id) => {
  var tweet = await pool.query(`SELECT * FROM tweets WHERE id = ${id}`);
  return tweet.rows[0];
};

const createTweet = (tweet) => {
  pool.query(
    `INSERT INTO tweets (texto, userid) VALUES ('${tweet.texto}', '${tweet.userId}' )`
  );
  return tweet;
};

const updateTweet = async (tweet) => {
  await pool.query(
    `UPDATE tweets SET texto = '${tweet.texto}' WHERE id = ${tweet.id}`
  );
  return tweet;
};

const deleteTweet = async (id) => {
  await pool.query(`DELETE FROM tweets WHERE id = ${id}`);
  return "tweet eliminado";
};

module.exports = {
  getAllTweets,
  getTweetById,
  createTweet,
  updateTweet,
  deleteTweet,
};
