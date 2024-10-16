const ordersModel = require("../models/orderModel");

exports.createOrder = async (req, res) => {
  const user_id = req.user.userId;

  try {
    const newOrder = await ordersModel.createOrder(user_id);
    console.log("Nueva orden creada:", newOrder.id)
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.addOrderDetail = async (req, res) => {
  const { order_id, productos } = req.body;
  console.log( "numero de orden", order_id)

  try {

    if (!order_id) {
      return res.status(400).json({message: "Falta el ID de la orden"})
    }

    const order = await ordersModel.getOrderById(order_id);

    if (!order) {
      return res.status(404).json({message: "No se encontró la orden con ese ID"})
    }

    if (order.user_id !== req.user.userId) {
      return res
        .status(403)
        .json({ message: "No autorizado para modificar esta orden" });
    }

    const result = await ordersModel.addOrderDetail(order_id, productos);

if (!result) {
  return res.status(500).json({message: "Error al agregar detalles a la orden"})
}

    res.status(200).json(result);
  } catch (error) {
    console.error("Error al agregar detalles a la orden:", error)
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
