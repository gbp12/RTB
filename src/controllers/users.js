const userService = require("../services/users");
const decodificador = require("../services/decodificador.js");
const getUserById = async (req, res) => {
  const { userId } = req.params;
  const user = await userService.getUserById(userId);
  res.status(200).json({
    data: user,
  });
};

const patchUserById = async (req, res) => {
  const { userId } = req.params;
  const token = req.headers.authorization;
  const decoded = decodificador.decodificarJWT(token);
  if (decoded.userId != userId) {
    res.status(403).json({
      message: "No tienes permiso para actualizar este usuario",
    });
  }
  console.log(req.body, decoded.userId, userId);
  /*  try {

        await userService.patchUserById(req.body);
    res.status(200).json({
      message: "Usuario actualizado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar el usuario",
    });
  }*/
};

module.exports = {
  getUserById,
  patchUserById,
};
