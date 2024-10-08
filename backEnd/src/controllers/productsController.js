const productsModel = require('../models/productsModel')

exports.getProducts = async (req, res) =>{
    try {
        const products = await productsModel.getProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
    } 
} 