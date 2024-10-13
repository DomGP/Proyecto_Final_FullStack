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

const createUser = async (nombre, apellido, email, password) => {
  const saltRounds = 10;

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const consulta = `INSERT INTO usuarios (nombre, apellido, email, password) VALUES ($1, $2, $3, $4) RETURNING *`;

  const values = [nombre, apellido, email, hashedPassword];

  try {
    const result = await pool.query(consulta, values);
    return result.rows[0];
  } catch (error) {
    throw new Error("Error al crear el usuario");
  }
};

const getUserByEmail = async (email) => {
  try {
    const result = await pool.query("SELECT * FROM usuarios WHERE email = $1", [email]);
    return result.rows[0];
  } catch (error) {
    console.error("Error al obtener usuario por email:", error);
    throw error;
  }
};

const deleteUserById = async (userId) => {
  const query = 'DELETE FROM usuarios WHERE id = $1';
  
  try {
      const res = await pool.query(query, [userId]);
      return res.rowCount;
  } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      throw error; 
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserByEmail,
  deleteUserById
};
