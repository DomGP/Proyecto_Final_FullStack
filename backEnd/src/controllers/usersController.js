const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const usersModel = require("../models/usersModel");


exports.createUser = async (req, res) => {
  const { nombre, apellido, email, password } = req.body;

  if (!nombre || !apellido || !email || !password) {
    return res.status(400).json({ message: "Todos los campos son requeridos" });
  }

  try {
    const nuevoUser = await usersModel.createUser(
      nombre,
      apellido,
      email,
      password
    );
    res.status(201).json(nuevoUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllusers = async (req, res) => {
  try {
    const users = await usersModel.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email y contraseña son requeridos" });
  }
  try {
    const user = await usersModel.getUserByEmail(email);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email, rol: user.rol },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteUserById = async (req, res) => {
  const userId = parseInt(req.params.id);
    console.log(`Intentando eliminar el usuario con ID: ${userId}`); // Depuración
    
    try {
        const deletedCount = await usersModel.deleteUserById(userId);
        console.log(`Número de usuarios eliminados: ${deletedCount}`); // Depuración
        if (deletedCount > 0) {
            res.status(204).send(); // No content
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar el usuario:', error); // Depuración
        res.status(500).json({ message: 'Error al eliminar el usuario' });
    }
};

  
