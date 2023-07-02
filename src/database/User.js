const pool = require("../../config/database");

const getUserById = async (id) => {
  var user = await pool.query(
    `SELECT id as userId, nombre as userName, email as userEmail FROM usuarios WHERE id = ${id};`
  );

  return { user: user.rows[0] };
};

const patchUserById = async (id, nombre, email) => {
  var user = await pool.query(
    `UPDATE usuarios SET nombre = '${nombre}', email = '${email}' WHERE id = ${id};`
  );
};

module.exports = {
  getUserById,
  patchUserById,
};
