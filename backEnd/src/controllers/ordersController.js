const ordersModel = require("../models/orderModel");

exports.createOrder = async (req, res) => {
  const { user_id } = req.body;

  try {
    const newOrder = await ordersModel.createOrder(user_id);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.addOrderDetail = async (req, res) => {
  const { order_id, productos } = req.body;

  try {
    const result = await ordersModel.addOrderDetail(order_id, productos);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOrderById = async (req, res)=> {
  const {order_id} = req.body;
  try {
    const result = await ordersModel.getOrderById(order_id)
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}
