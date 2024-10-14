const ordersModel = require("../models/orderModel");

exports.createOrder = async (req, res) => {
  const user_id = req.user.userId;

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
    const order = await ordersModel.getOrderById(order_id);
    if (order.user_id !== req.user.userId) {
      return res
        .status(403)
        .json({ message: "No autorizado para modificar esta orden" });
    }

    const result = await ordersModel.addOrderDetail(order_id, productos);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOrderById = async (req, res) => {
  const { order_id } = req.body;

  try {
    const order = await ordersModel.getOrderById(order_id);

    if (req.user.rol === "admin") {
      return res.status(200).json(order);
    }

    if (order.user_id !== req.user.userId) {
      return res
        .status(403)
        .json({ message: "No autorizado para ver esta orden" });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await ordersModel.getAllOrders(); // Implementa esta función en el modelo
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
