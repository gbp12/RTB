const User = require("../database/User");

const getUserById = async (id) => {
  return User.getUserById(id);
};

const patchUserById = async (body) => {
  const { id, nombre, email } = body;
  return User.patchUserById(id, nombre, email);
};

module.exports = {
  getUserById,
  patchUserById,
};
