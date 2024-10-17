const pool = require("../config/db");

const createPost = async (
  user_id,
  nombre,
  img_url,
  descripcion,
  categoria,
  precio,
  plataforma
) => {
  const consulta = `INSERT INTO users_posts (user_id, nombre, img_url, descripcion, nombre_categoria, precio, plataforma) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`;

  const values = [
    user_id,
    nombre,
    img_url,
    descripcion,
    categoria,
    precio,
    plataforma,
  ];

  try {
    const result = await pool.query(consulta, values);
    return result.rows[0];
  } catch (error) {
    console.error("Error al crear el post:", error);
    throw new Error("Error al crear el post");
  }
};

const getPostByUser = async (user_id) => {
  const consulta = `SELECT p.id, p.nombre, p.img_url, p.descripcion, p.nombre_categoria, p.precio, p.plataforma FROM users_posts p WHERE p.user_id = $1`;

  const values = [user_id];

  try {
    const result = await pool.query(consulta, values);

    if (result.rows.lenght === 0) {
      throw new Error("No se encontraron post para este usuario");
    }
    return result.rows;
  } catch (error) {
    console.error("Error al obtener los posts por user_id:", error);
    throw new Error("Error al consultar los post del usuario");
  }
};

const deletePostbyId = async (id, user_id) => {
 const consulta= `DELETE FROM users_posts WHERE id = $1 AND user_id = $2 RETURNING * `

values = [id, user_id]

try {
  const result = await pool.query(consulta, values)

  if (result.rows.length === 0){
    throw new Error("No se encuentra el post con ese id")}

    return result.rows[0]
} catch (error) {
  console.error("Error al eliminar el post:", error)
  throw new Error("Error al eliminar el post")
  
}

}

module.exports = {
  createPost, getPostByUser, deletePostbyId
};
