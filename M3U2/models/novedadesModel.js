var pool = require('./bd');
async function getNovedades() {
  var query = 'select * from novedades order by id desc';
  var rows = await pool.query(query);
  return rows;
}

async function deleteNovedadById(id) {
  var query = 'delete from novedades where id = ? ';
  var rows = await pool.query(query, [id]);
  return rows;
}

async function insertNovedad(obj) {
  try {
    var query = 'insert into novedades set ? ';
    var rows = await pool.query(query, [obj]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function getNovedadById(id) {
  var query = 'SELECT * FROM novedades WHERE id = ?';
  var rows = await pool.query(query, [id]);
  return rows[0];
}

async function modificarNovedadById(obj, id) {
  try {
    var query = 'UPDATE novedades SET ? WHERE id = ?';
    var rows = await pool.query(query, [obj, id]);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function buscarNovedades(busqueda) {
  var query =
    'SELECT * FROM novedades WHERE titulo LIKE ? OR subtitulo LIKE ? OR cuerpo LIKE ?';
  var rows = await pool.query(query, [
    '%' + busqueda + '%',
    '%' + busqueda + '%',
    '%' + busqueda + '%',
  ]);
  return rows;
}

module.exports = {
  getNovedades,
  deleteNovedadById,
  insertNovedad,
  getNovedadById,
  modificarNovedadById,
  buscarNovedades,
};
