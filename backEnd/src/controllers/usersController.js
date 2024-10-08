const usersModel = require('../models/usersModel');

exports.createUser = async (req, res) => {
    const {nombre, apellido, email, password} = req.body;

    if (!nombre || !apellido || !email || !password) {
        return res.status(400).json({message:'Todos los campos son requeridos'})
    }

    try {
        const nuevoUser = await usersModel.createUser(nombre, apellido, email, password);
        res.status(201).json(nuevoUser)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.getAllusers = async (req, res) => {
    try {
        const users = await usersModel.getAllUsers();
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}