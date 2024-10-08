const pool = require("../config/db");
const bcrypt = require("bcrypt");

const getAllUsers = async () => {
  try {
    const result = await pool.query("SELECT * FROM usuarios");

    if (result.rows.length === 0) {
      throw new Error("No se encontraron usuarios");
    }
    return result.rows;
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    throw error;
  }
};

const createUser = async (nombre, apellido, email, contraseña) => {
  const saltRounds = 10;

  const hashedPassword = await bcrypt.hash(contraseña, saltRounds);

  const consulta = `INSERT INTO usuarios (nombre, apellido, email, contraseña) VALUES ($1, $2, $3, $4) RETURNING *`;

  const values = [nombre, apellido, email, hashedPassword];

  try {
    const result = await pool.query(consulta, values);
    return result.rows[0];
  } catch (error) {
    throw new Error("Error al crear el usuario");
  }
};

module.exports = {
  createUser,
  getAllUsers,
};
