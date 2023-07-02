const jwt = require("jsonwebtoken");

function decodificarJWT(jwtToken) {
  try {
    const decoded = jwt.verify(jwtToken, "shhhElSecreto");
    return decoded;
  } catch (error) {
    // Manejo de errores en la verificación del token
    console.error("Error al decodificar el token:", error.message);
    return null;
  }
}

module.exports = {
  decodificarJWT,
};
