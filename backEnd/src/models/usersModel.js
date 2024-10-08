const pool = require("../config/db")

const createUser = async (nombre, apellido, email, contraseña) => {
    try {
const result = await pool.query(
    'INSERT INTO usuarios (nombre, apellido, email, contraseña) VALUES ($1, $2, $3, $4) RETURNING *',
    [nombre, apellido, email, contraseña]
);
    return result.rows[0];
    } catch (error) {
        throw new Error('Error al crear el usuario')
    }
};



module.exports = {
    createUser
}