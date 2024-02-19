// Importación de módulos y configuración de la conexión a la base de datos
var pool = require('./bd');
var md5 = require('md5');

// Definición de la función asincrónica getUserAndPassword
async function getUserAndPassword(user, password) {
  try {
    var query =
      'select * from usuarios where usuario = ? and password = ? limit 1';
    var rows = await pool.query(query, [user, md5(password)]);
    return rows[0];
  } catch (error) {
    console.log(error);
  }
}

// Exportación de la función getUserAndPassword para que pueda ser utilizada desde otros archivos
module.exports = { getUserAndPassword };
