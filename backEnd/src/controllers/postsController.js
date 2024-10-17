const postsModel = require("../models/postsModel");

exports.createPost = async (req, res) => {
  const user_id = req.user.userId;
  const { nombre, img_url, descripcion, nombre_categoria, precio, plataforma } =
    req.body;

  try {
    const newPost = await postsModel.createPost(
      user_id,
      nombre,
      img_url,
      descripcion,
      nombre_categoria,
      precio,
      plataforma
    );
    res.status(201).json(newPost);
  } catch (error) {
    console.error("Error al crear el post:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.getPostsByUser = async (req, res) => {
  const user_id = req.user.userId;

  try {
    const posts = await postsModel.getPostByUser(user_id);

    if (posts.length === 0) {
      return req
        .status(404)
        .json({ message: "No se encontraron posts para este usuario" });
    }
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error al obtener los posts por user_id:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.deletePostById = async (req, res) => {
  const user_id = req.user.userId;
  const { post_id } = req.params;

  try {
    const deletedPost = await postsModel.deletePostbyId(post_id, user_id);
    res
      .status(200)
      .json({ message: "Post eliminado exitosamente", post: deletedPost });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
