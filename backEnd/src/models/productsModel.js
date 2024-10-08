const pool = require("../config/db");

const getProducts = async () => {
  try {
    const result = await pool.query("SELECT * FROM productos");
    return result.rows;
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    throw error;
  }
};

module.exports = {
  getProducts,
};
