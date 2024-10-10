const pool = require("../config/db");

const getProducts = async () => {
  try {
    const result = await pool.query(`
      SELECT p.id, p.nombre, p.img_url, p.descripcion, p.precio, p.plataforma, c.nombre_categoria
      FROM productos p
      LEFT JOIN categorias c ON p.categoria_id = c.id ORDER BY p.nombre ASC
    `);
    return result.rows;
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    throw error;
  }
};

module.exports = {
  getProducts,
};
